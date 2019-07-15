import { USER_LOGIN,GET_VALUE } from './type';

export const userLogin = (Username,password) => dispatch => {

    const Name = Username;
    const Pass = password;

    localStorage.setItem("Name",Name);
    localStorage.setItem("Pass",Pass);

dispatch({
    type:USER_LOGIN,
    payload:{Name:Name,Password:Pass}
})


}

export const getValue = () => dispatch => {

    const Name = localStorage.getItem("Name")
    const Password = localStorage.getItem("Pass")

    dispatch({
        type:GET_VALUE,
        payload:{Name,Password}
    })
}