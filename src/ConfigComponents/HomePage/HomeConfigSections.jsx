// import React from 'react';
import { FaCopy, FaPlus, FaTrash } from 'react-icons/fa';
import { handleDelete, handleImage, handleImageById } from '../handleImage';
import FontPicker from "font-picker-react";
import React, { useState } from "react";

export function ConfigHeader(props) {
  return (
    <>
      <h5>Header</h5>
      <br />
      <div>
        Background color
        <input data-toggle="tooltip" data-placement="top" title="Change background color"
          type="color"
          value={props.school.colors.header}
          onChange={(e) => props.color([e.target.value, 'header'])}
        />
      </div>
      <div>
        Title
        <input data-toggle="tooltip" data-placement="top" title="Change title color"
          type="color"
          value={props.school.colors.title}
          onChange={(e) => props.color([e.target.value, 'title'])}
        />
        <input data-toggle="tooltip" data-placement="top" title="Change text color"
          type="text"
          onChange={(e) =>
            props.function({ prop: 'title', data: e.target.value })
          }
          value={props.school.title}
        />
      </div>
      <div>
        subtitle
        <input data-toggle="tooltip" data-placement="top" title="Change subtitle color"
          type="color"
          value={props.school.colors.subtitle}
          onChange={(e) => props.color([e.target.value, 'subtitle'])}
        />
        <input
          type="text"
          onChange={(e) =>
            props.function({ prop: 'subtitle', data: e.target.value })
          }
          value={props.school.subtitle}
        />
      </div>
      <div>
        Search bar
        <input data-toggle="tooltip" data-placement="top" title="Change search bar color"
          type="color"
          value={props.school.colors.searchbar}
          onChange={(e) => props.color([e.target.value, 'searchbar'])}
        />
        <label className="switch">
          <input
            type="checkbox"
            onClick={(e) => props.show('searchbar')}
            checked={props.school.show.searchbar}
          />
          <span className="slider round" data-toggle="tooltip" data-placement="top" title="Hide/show search bar"></span>
        </label>
      </div>
      <div>
        Select image
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => handleImage(e, props.image)}
          style={{ backgroundImage: props.school.image }}
          files={props.school.image}
        // onChange={(e) =>
        //   props.function({prop: 'subtitle', data: e.target.value})
        // }
        // value={props.school.image}
        />
      </div>
    </>
  );
}

export function ConfigCategory(props) {
  let { data, id } = props;
  let thisCategory = props.school.categories[id];
  return (
    <>
      <h5>
        Categoty
        <FaPlus data-toggle="tooltip" data-placement="top" title="Add category"
          onClick={(e) =>
            data.addNewForSection([
              {
                name: 'Name',
                icon: './img_from_xd/Layer 2.svg',
                backcolor: '#FFF',
              },
              'categories',
            ])
          }
        />
        <FaTrash data-toggle="tooltip" data-placement="top" title="Garbage"
          onClick={(e) =>
            handleDelete(data.deleteFromSection, [id, 'categories'])
          }
        />
        <FaCopy data-toggle="tooltip" data-placement="top" title="Copy"
          onClick={(e) =>
            data.addNewForSection([
              {
                name: thisCategory.name,
                icon: thisCategory.icon,
                backcolor: thisCategory.name.backcolor,
              },
              'categories',
            ])
          }
        />

      </h5>
      <div>
        Name
        <input
          type="text"
          value={data.school.categories[id].name}
          onChange={(e) => props.function([e.target.value, 'name', id])}
        />
      </div>
      <div>
        Background color
        <input data-toggle="tooltip" data-placement="top" title="Change background color"
          id={'category-backcolor-' + id}
          type="color"
          className="border-white"
          value={data.school.categories[id].backcolor}
          onChange={(e) =>
            props.function([e.target.value, 'backcolor', props.id])
          }
        />
      </div>
      <div>
        Icon
        <input
          type="file"
          accept=".svg"
          onChange={(e) => handleImageById(e, props.image, props.id)}
          style={{ backgroundImage: data.school.image }}
          files={data.school.image}
        // onChange={(e) =>
        //   props.function({prop: 'subtitle', data: e.target.value})
        // }
        // value={props.school.image}
        />
      </div>
    </>
  );
}

export function ConfigCategories(props) {
  let { data, id } = props;
  // const YOUR_API_KEY = 'AIzaSyCzgSJ33qliZxON6yFXjEpUudk2QsNTkBg';
	const [activeFontFamily, setActiveFontFamily] = useState("Open Sans");
  return (

    <>
      <h5>
        Categories
        <FaPlus data-toggle="tooltip" data-placement="top" title="Add category"
          onClick={(e) =>
            props.data.addNewForSection([
              {
                name: 'Name',
                icon: './img_from_xd/Layer 2.svg',
                backcolor: '#FFF',
              },
              'categories',
            ])
          }
        />
      </h5>
      <div>
        Background color
        <input data-toggle="tooltip" data-placement="top" title="Change background color"
          type="color"
          value={props.school.colors.categories}
          onChange={(e) => props.color([e.target.value, 'categories'])}
        />
      </div>
      <div>
        Show this section
        <label className="switch" data-toggle="tooltip" data-placement="top" title="Hide/show categories">
          <input
            type="checkbox"
            onClick={(e) => props.show('categories')}
            checked={props.school.show.categories}
          />
          <span className="slider round"></span>
        </label>
        <div>
          Text
        <input data-toggle="tooltip" data-placement="top" title="Change text color"
            type="color"
            value={props.school.colors.choiceFavourite}
            onChange={(e) => props.color([e.target.value, 'choiceFavourite'])}
          />
          <input
            type="text"
            value={data.school.choiceFavourite.header}
            onChange={(e) =>
              data.setChoiceFavorite([e.target.value, 'header'])
            }
          />
          <FontPicker
            apiKey="YOUR_API_KEY"
            activeFontFamily={activeFontFamily}
            onChange={(nextFont) =>
                activeFontFamily= nextFont.family
            }
          />
          <p className="apply-font">The font will be applied to this text.</p>

        </div>


      </div>
    </>
  );
}

export function ConfigGetChoice(props) {
  let data = props.data;
  return (
    <>
      <div>
        Background color
        <input data-toggle="tooltip" data-placement="top" title="Change background color"
          type="color"
          value={props.school.colors.getChoice}
          onChange={(e) => props.color([e.target.value, 'getChoice'])}
        />
      </div>
      <div>
        Show this section
        <label className="switch" data-toggle="tooltip" data-placement="top" title="Hide/show this section">
          <input
            type="checkbox"
            onClick={(e) => props.show('getChoice')}
            checked={props.school.show.getChoice}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div>
        Title
        <textarea
          value={data.school.getChoice.header}
          onChange={(e) =>
            data.setGetChoice([e.target.value, 'header'])
          }
        />
      </div>
      <div>
        Items to show
        <input
          type="number"
          value={data.school.getChoice.items}
          onChange={(e) => data.setGetChoice([e.target.value, 'items'])}

        />
      </div>
      <radioGroup>
        <br />
        <u>Algorithm</u>
        {/* <div id="algo" radioGroup="algo"> */}
        <div>
          Most stars
          <input
            type="radio"
            checked={data.school.getChoice.algorithm === 'stars'}
            onChange={(e) => data.setGetChoice(['stars', 'algorithm'])}
          />
        </div>
        <div>
          Most views
          <input
            type="radio"
            checked={data.school.getChoice.algorithm === 'views'}
            onChange={(e) => data.setGetChoice(['views', 'algorithm'])}
          />
        </div>
        <div>
          Most students
          <input
            type="radio"
            checked={data.school.getChoice.algorithm === 'students'}
            onChange={(e) => data.setGetChoice(['students', 'algorithm'])}
          />
        </div>
        <div>
          Most lessons
          <input
            type="radio"
            checked={data.school.getChoice.algorithm === 'lessons'}
            onChange={(e) => data.setGetChoice(['lessons', 'algorithm'])}
          />
        </div>
        {/* </div> */}
      </radioGroup>
    </>
  );
}

export function ConfigLearning(props) {
  return (
    <>
      <h5>
        Learning platform
        <FaPlus data-toggle="tooltip" data-placement="top" title="Add learning platform"
          onClick={(e) =>
            props.data.addNewForLearning({
              id: '00.',
              header: 'Header',
              text: 'Write here the text for that paragraph',
            })
          }
        />
      </h5>
      <div>
        Background color
        <input data-toggle="tooltip" data-placement="top" title="Change background"
          type="color"
          value={props.school.colors.learning}
          onChange={(e) => props.color([e.target.value, 'learning'])}
        />
      </div>
      <div>
        Show this section
        <label className="switch" data-toggle="tooltip" data-placement="top" title="Hide/show this section">
          <input
            type="checkbox"
            onClick={(e) => props.show('learning')}
            checked={props.school.show.learning}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div>
        Title
        <input
          type="text"
          onChange={(e) => props.function(e.target.value)}
          value={props.school.learning.header}
        />
      </div>
      <div>
        Image
        <input
          type="file"
          accept=".jpg, .png, .jpeg"
          onChange={(e) => handleImage(e, props.image)}
        />
      </div>
    </>
  );
}

export function ConfigLearningX(props) {
  let { data, id } = props;
  let thisLearn = props.school.learning.info[id];
  return (
    <>
      <h5>
        <FaPlus data-toggle="tooltip" data-placement="top" title="Add information"
          onClick={(e) =>
            data.addNewForLearning({
              id: '00.',
              header: 'Header',
              text: 'Write here the text for that paragraph',
            })
          }
        />
        <FaTrash data-toggle="tooltip" data-placement="top" title="Garbage"
          onClick={(e) =>
            handleDelete(data.deleteFromLearning, [id, 'learning'])
          }
        />
        <FaCopy data-toggle="tooltip" data-placement="top" title="Copy"
          onClick={(e) =>
            data.addNewForLearning({
              id: thisLearn.id,
              header: thisLearn.header,
              text: thisLearn.text,
            })
          }
        />
      </h5>
      <div>
        id
        <input
          type="text"
          value={data.school.learning.info[id].id}
          onChange={(e) => {
            data.setLearning([e.target.value, 'id', id]);
          }}
        />
      </div>
      <div>
        Title
        <input
          type="text"
          value={data.school.learning.info[id].header}
          onChange={(e) => {
            data.setLearning([e.target.value, 'header', id]);
          }}
        />
      </div>
      <div>
        Text
        <input
          type="text"
          value={data.school.learning.info[id].text}
          onChange={(e) => {
            data.setLearning([e.target.value, 'text', id]);
          }}
        />
      </div>
    </>
  );
}
export function ConfigWorldSelection(props) {
  let { data } = props;
  return (
    <>
      <h5>World Selection</h5>
      <div>
        Background color
        <input data-toggle="tooltip" data-placement="top" title="Change background"
          type="color"
          value={props.school.colors.worldSelection}
          onChange={(e) => props.color([e.target.value, 'worldSelection'])}
        />
      </div>
      <div>
        Show this section
        <label className="switch" data-toggle="tooltip" data-placement="top" title="Hide/show this section">
          <input
            type="checkbox"
            onClick={(e) => props.show('worldSelection')}
            checked={props.school.show.worldSelection}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div>
        Title
        <textarea
          value={data.school.worldSelection.header}
          onChange={(e) =>
            data.setWorldSelection([e.target.value, 'header'])
          }
        />
      </div>
      <div>
        Items to show
        <input
          type="number"
          value={data.school.worldSelection.items}
          onChange={(e) => data.setWorldSelection([e.target.value, 'items'])}

        />
      </div>
      <radioGroup>
        <br />
        <u>Algorithm</u>
        {/* <div id="algo" radioGroup="algo"> */}
        <div>
          Most stars
          <input
            type="radio"
            checked={data.school.worldSelection.algorithm === 'stars'}
            onChange={(e) => data.setWorldSelection(['stars', 'algorithm'])}
          />
        </div>
        <div>
          Most views
          <input
            type="radio"
            checked={data.school.worldSelection.algorithm === 'views'}
            onChange={(e) => data.setWorldSelection(['views', 'algorithm'])}
          />
        </div>
        <div>
          Most students
          <input
            type="radio"
            checked={data.school.worldSelection.algorithm === 'students'}
            onChange={(e) => data.setWorldSelection(['students', 'algorithm'])}
          />
        </div>
        <div>
          Most lessons
          <input
            type="radio"
            checked={data.school.worldSelection.algorithm === 'lessons'}
            onChange={(e) => data.setWorldSelection(['lessons', 'algorithm'])}
          />
        </div>
        {/* </div> */}
      </radioGroup>
    </>
  );
}

export function ConfigCTA(props) {
  let data = props.data;
  return (
    <>
      <h5>Get started</h5>
      <div>
        Background color
        <input data-toggle="tooltip" data-placement="top" title="Change background"
          type="color"
          value={props.school.colors.CTA}
          onChange={(e) => props.color([e.target.value, 'CTA'])}
        />
      </div>
      <div>
        Show this section
        <label className="switch" data-toggle="tooltip" data-placement="top" title="Hide/show this section">
          <input
            type="checkbox"
            onClick={(e) => props.show('CTA')}
            checked={props.school.show.CTA}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div>
        Title
        <input
          type="text"
          onChange={(e) => data.setCta([e.target.value, 'title'])}
          value={props.school.CTA.title}
        />
      </div>
      <div>
        Text
        <textarea
          type="text"
          onChange={(e) => data.setCta([e.target.value, 'text'])}
          value={props.school.CTA.text}
        />
      </div>
    </>
  );
}

export function ConfigTestimoinal(props) {
  let data = props.data;
  return (
    <>
      <h5>
        Testimoinal
        <FaPlus
          onClick={(e) =>
            data.addNewForSection([
              {
                name: 'Name',
                image: './img_from_xd/User.png',
                description: 'What the testimoinal has to say.',
              },
              'testimoinals',
            ])
          }
        />
      </h5>
      <div>
        Background color
        <input data-toggle="tooltip" data-placement="top" title="Change background"
          type="color"
          value={data.school.colors.testimoinal}
          onChange={(e) =>
            data.setColorSchoolByPart([e.target.value, 'testimoinal'])
          }
        />
      </div>
      <div>
        Show this section
        <label className="switch" data-toggle="tooltip" data-placement="top" title="Hide/show this section">
          <input
            type="checkbox"
            onClick={(e) => data.showSchoolByPart('testimoinal')}
            checked={data.school.show.testimoinal}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
}

export function ConfigTestimoinalX(props) {
  let { data, id } = props;
  let thisTest = data.school.testimoinals[id];
  return (
    <>
      <h5>
        <FaPlus
          onClick={(e) =>
            data.addNewForSection([
              {
                name: 'Name',
                image: './img_from_xd/User.png',
                description: 'What the testimoinal has to say.',
              },
              'testimoinals',
            ])
          }
        />
        <FaTrash
          onClick={(e) => {
            handleDelete(data.deleteFromSection, [id, 'testimoinals']);
            data.setSectionConfig({
              name: id == 0 ? 'testimoinal' : 'testimoinal-x',
              id: id == 0 ? 1 : id - 1,
            });
          }}
        />
        <FaCopy
          onClick={(e) =>
            data.addNewForSection([
              {
                name: thisTest.name,
                image: thisTest.image,
                description: thisTest.description,
              },
              'testimoinals',
            ])
          }
        />
      </h5>
      <div>
        Name
        <input
          type="text"
          value={data.school.testimoinals[id].name}
          onChange={(e) => {
            data.setTestimoinal([e.target.value, 'name', id]);
          }}
        />
      </div>
      <div>
        Description
        <textarea
          type="text"
          value={data.school.testimoinals[id].description}
          onChange={(e) => {
            data.setTestimoinal([e.target.value, 'description', id]);
          }}
        />
      </div>
      <div>
        Image
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={(e) => handleImageById(e, data.setTestimoinalImage, id)}
        />
      </div>
    </>
  );
}

export function ConfigPartner(props) {
  let data = props.data;
  return (
    <>
      <h5>
        Partners
        <FaPlus
          onClick={(e) =>
            data.addNewForSection(['./img_from_xd/leader-logo.png', 'partners'])
          }
        />
      </h5>
      <div>
        Background color
        <input data-toggle="tooltip" data-placement="top" title="Change background"
          type="color"
          value={data.school.colors.partners}
          onChange={(e) =>
            data.setColorSchoolByPart([e.target.value, 'partners'])
          }
        />
      </div>
      <div>
        Show this section
        <label className="switch" data-toggle="tooltip" data-placement="top" title="Hide/show this section">
          <input
            type="checkbox"
            onClick={(e) => data.showSchoolByPart('partners')}
            checked={data.school.show.partners}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
}

export function ConfigPartnerX(props) {
  let { data, id } = props;
  let thisPartner = data.school.partners[id];
  return (
    <>
      <h5>
        <FaPlus
          onClick={(e) =>
            data.addNewForSection(['./img_from_xd/leader-logo.png', 'partners'])
          }
        />
        <FaTrash
          onClick={(e) => {
            handleDelete(data.deleteFromSection, [id, 'partners']);
            data.setSectionConfig({
              name: id == 0 ? 'partner' : 'partner-x',
              id: id == 0 ? 1 : id - 1,
            });
          }}
        />
        <FaCopy
          onClick={(e) => data.addNewForSection([thisPartner, 'partners'])}
        />
      </h5>
      <div>
        Image
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={(e) => handleImageById(e, data.setPartners, id)}
        />
      </div>
    </>
  );
}
function HelpShare(props) {
  let { name, buttons, func } = props;
  let show = buttons.show[name];
  let value = buttons.share[name];
  return (
    <div>
      {name}
      <label class="switch">
        <input
          type="checkbox"
          onClick={(e) =>
            func({
              sh: 'show',
              name: name,
              text: e.target.checked,
            })
          }
          checked={show}
        />
        <span class="slider round"></span>
      </label>
      {show && (
        <input
          type="text"
          placeholder={'link to ' + name}
          onChange={(e) =>
            func({
              sh: 'share',
              name: 'instegram',
              text: e.target.value,
            })
          }
          value={value}
        />
      )}
    </div>
  );
}
export function ConfigFooter(props) {
  let data = props.data;
  return (
    <>
      <h5>Footer</h5>
      <div>
        Background color
        <input data-toggle="tooltip" data-placement="top" title="Change background"
          type="color"
          value={data.school.colors.footer}
          onChange={(e) =>
            data.setColorSchoolByPart([e.target.value, 'footer'])
          }
        />
      </div>
      <div>
        Show this section
        <label className="switch" >
          <input
            type="checkbox"
            onClick={(e) => data.showSchoolByPart('footer')}
            checked={data.school.show.footer}
          />
          <span className="slider round" ></span>
        </label>
      </div>
      <div>
        Footer text
        <textarea
          type="text"
          value={data.school.footerBottom.text}
          onChange={(e) => {
            data.setFooterText(e.target.value);
          }}
        />
      </div>
      <HelpShare
        name={'instegram'}
        func={data.setFooterShare}
        buttons={data.school.footerBottom}
      />
      <HelpShare
        name={'facebook'}
        func={data.setFooterShare}
        buttons={data.school.footerBottom}
      />
      <HelpShare
        name={'whatsapp'}
        func={data.setFooterShare}
        buttons={data.school.footerBottom}
      />
      <HelpShare
        name={'twitter'}
        func={data.setFooterShare}
        buttons={data.school.footerBottom}
      />
      <HelpShare
        name={'linkedin'}
        func={data.setFooterShare}
        buttons={data.school.footerBottom}
      />
      <HelpShare
        name={'youtube'}
        func={data.setFooterShare}
        buttons={data.school.footerBottom}
      />
      <HelpShare
        name={'reddit'}
        func={data.setFooterShare}
        buttons={data.school.footerBottom}
      />
      <HelpShare
        name={'google'}
        func={data.setFooterShare}
        buttons={data.school.footerBottom}
      />
    </>
  );
}
export function ConfigFooterCol(props) {
  let { data, col } = props;
  let thisCol = data.school.footer[col];
  return (
    <>
      <h5>
        Footer
        <FaPlus
          onClick={(e) =>
            data.addNewForFooter({ col: col, array: 'new', links: 'link to...' })
          }
        />
        <input
          type="text"
          value={thisCol.name}
          onChange={(e) => {
            data.setFooterColName({
              col: col,
              text: e.target.value,
            });
          }}
        />
        {/* <FaCopy
          onClick={(e) =>
            data.addNewForFooter({
              col: thisCol.col,
              array: thisCol.array,
              links: thisCol.links,
            })
          }
        /> */}
      </h5>
      {thisCol.array.map((value, key) => {
        return (
          <>
            <span>
              {key + 1}
              <FaTrash
                onClick={(e) => {
                  handleDelete(data.deleteFromFooter, { col: col, id: key });
                }}
              />
              <FaCopy
                onClick={(e) => {
                  data.addNewForFooter({
                    col: col,
                    array: thisCol.array[key],
                    links: thisCol.links[key],
                  });
                }}
              />
            </span>
            <div>
              Text
              <input
                type="text"
                value={value}
                onChange={(e) => {
                  data.setFooter({
                    col: col,
                    key: 'array',
                    value: e.target.value,
                    id: key,
                  });
                }}
              />
            </div>
            <div>
              Link to
              <input
                type="text"
                value={thisCol.links[key]}
                onChange={(e) => {
                  data.setFooter({
                    col: col,
                    key: 'links',
                    value: e.target.value,
                    id: key,
                  });
                }}
              />
            </div>
            <br></br>
          </>
        );
      })}
    </>
  );
}
export function SchoolButtons(props) {
  return (
    <>
      <h5>Buttons</h5>
      <br />
      <div>
        Background color of all the buttons
        <input
          type="color"
          value={props.school.colors.buttons}
          onChange={(e) => props.color([e.target.value, 'button'])}
        />
      </div>
      <div>
        font color of all the buttons
        <input
          type="color"
          value={props.school.colors.buttons}
          onChange={(e) => props.color([e.target.value, 'fontButton'])}
        />
      </div>
    </>
  )
}

// export function SchoolCourse(props)
// {
//   return(
//     <>
//     <h5>Buttons</h5>
//       <br />
//       <div>
//         Background color of all the buttons
//         <input
//           type="color"
//           value={props.school.colors.buttons}
//           onChange={(e) => props.color([e.target.value, 'button'])}
//         />
//       </div>
//     </>
//   )
// }