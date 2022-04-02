import React from "react";
import { shallow } from "enzyme"
import Login from "../../components/Login"
import  authreducer from "../../redux/reducers/authReducer"
import { AuthActionType } from "../../redux/actions/AuthAction";


const setUp = (props={}) => {
    const component = shallow(<Login {...props} />);
    return component;
}




// describe('Login Component', ()=>{
//     beforeEach(() => {
//         const props = {
//             login:"",
//         }
//     })
//     it("It should render without errors", ()=>{
//         const component = shallow(<Login />);
//         const wrapper = component.find('[test-data="loginComponent"]');
//         expect(wrapper.length).toBe(1);
//     })
// })




describe('Login Compnent', ()=>{
    it("It should render without errors", ()=>{
       const component = shallow(<Login />);
        const wrapper = component.find('[test-data="loginComponent"]');
        expect(wrapper.length).toBe(1);
    })

    it('should return the initial state', () => {
        expect(authreducer(undefined, {})).toEqual({
                isLoggedIn: false,
                user: {
                    message:"",
                    user:"",
                    token: "",
                },
            }
        )
    })  
})