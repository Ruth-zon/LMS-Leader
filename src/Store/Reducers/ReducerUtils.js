function convertActionTypeToName(actionType) {//SET_COMPANY_NAME
    return actionType.toLowerCase().replace(/_(\w)/g, v => v[1].toUpperCase());//setCompanyName
}
  
  
export default function createReducer(state, action, handlers) {
    const key = convertActionTypeToName(action.type);//"setCompanyName"
    // const handler = handlers[key];

    // if (handler) {
    //     handler(state, action);
    // }
}