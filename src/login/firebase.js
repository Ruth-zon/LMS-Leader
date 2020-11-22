import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createBrowserHistory } from 'history';
import { useContext } from "react";
import { UserContext } from "./userProvider";
import $ from 'jquery'
import { useCookies } from "react-cookie";

import { withCookies, Cookies } from "react-cookie";

const browserHistory = createBrowserHistory();

var firebaseConfig = {
    apiKey: 'AIzaSyB9giidNYNmRxYgj3PC4cysla54gHxaNJ4',
    authDomain: 'lms-leader.firebaseapp.com',
    databaseURL: 'https://lms-leader.firebaseio.com',
    projectId: 'lms-leader',
    storageBucket: 'lms-leader.appspot.com',
    messagingSenderId: '451375116419',
    appId: '1:451375116419:web:a631ec62e2e0a0304e6bb6',
    measurementId: 'G-2DZBMG06NZ',
};
firebase.initializeApp(firebaseConfig);
// firebase.auth.Auth.Persistence.LOCAL;

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider).then((res) => {
        console.log(res.user);
        debugger;
        console.log(res.user.displayName);
        // nav(res.user.displayName);
    }).catch((err) => {
        debugger;
        console.log(err)
    })
    // nav();
};

export const signOut = () => {
    let exsistsJwt = document.cookie.split(";").filter(s => s.includes('jwt'));
    console.log(exsistsJwt);

    firebase
        .auth()
        .signOut()
        .then(function () {
            console.log("logged out");
            document.cookie = 'jwt' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.leader.codes';
        })
        .catch(function (error) { console.log(error) });
}
export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        debugger;
        const { email, displayName, photoURL, uid } = user;
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                uid,
                ...additionalData
            });
        } catch (error) {
            console.error("Error creating user document", error);
        }
    }
    return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
    if (!uid) return null;
    try {
        const userDocument = await firestore.doc(`users/${uid}`).get();
        return {
            uid,
            ...userDocument.data()
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};
export const nav = (displayName) => {
    debugger;
    // const name= displayName.replace(/\s/g, '');
    // browserHistory.replace('/' + displayName + '/addcourse');
    window.location.href = 'localhost:3000/' + displayName + '/addcourse';
};


let myJwt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ3ZGtwNUQyaFJPYzRYSmJCY3FkdzlDOUM3T3gyIiwiZW1haWwiOiJydXRoem9uQGxlYWRlci5jb2RlcyIsImlwIjoiMTk1LjYwLjIzNS4xNDEiLCJpYXQiOjE2MDU3ODA2MDh9.StX-QtG8q4z2JvJ4VFMZQn2PYkb0vqo00Vbmn0GNlFU";
let myUid="wdkp5D2hROc4XJbBcqdw9C9C7Ox2"

export function checkPremission(data) {
    let TokenToString = data.accessToken.toString();
    let dataToProfilePage = {
        action: "loginCheckPermission",
        token: TokenToString
    };
    $.ajax({
        url: "https://lms.leader.codes/register/checkPermission",
        headers: {
            Authorization: TokenToString
        },
        method: "post",
        dataType: "json",
        contentType: "application/json",
        withCradentials: true,
        data: JSON.stringify(dataToProfilePage),
        success: function (data) {
            console.log(data)
            let jsonWebToken = data.jwt;
            let uid = data.uid;
            let noQuotesJwtData = jsonWebToken.split('"').join("");
            let now = new Date();
            now.setMonth(now.getMonth() + 1);

            // document.cookie = "jwt=" + noQuotesJwtData + ";domain=.leader.codes" + "; path=/; Expires=" + now.toUTCString() + ";"
            document.cookie = "jwt=" + myJwt + ";domain=.leader.codes" + "; path=/; Expires=" + now.toUTCString() + ";"
            console.log("cookie" + document.cookie)

            const queryString = window.location.search;

            const urlParams = new URLSearchParams(queryString);
            const des = urlParams.get('des')
            const routes = urlParams.get('routes')
            const userName = data.userName
            console.log(userName)
            let redirectUrl = ''
            if (des) {
                redirectUrl = "https://" + des + '/' + userName;
                if (routes) {
                    redirectUrl += '/' + routes
                }
                window.location.href = redirectUrl
            } else {
                debugger;
                // nav(userName);
                if (!data.is_username)
                    browserHistory.replace('/wizard')
                window.location.reload()
                (!data.is_username) ? browserHistory.replace('/wizard') :  window.location.href ='http://localhost:3000/' + userName + '/addcourse';
            }
        }
    });
}
