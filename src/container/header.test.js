
import { render, screen, fireEvent, waitFor, act, userEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store'
import { Header } from './header';
import { Form } from './form';
import { BrowserRouter } from 'react-router-dom';
  
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'

const storeRender = () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                {/* <Form/> */}
            </BrowserRouter>
        </Provider>
    )
}
describe("Header Tests", function () {
        
    test('AllElements', () => {
        storeRender();
        const linkElement = screen.getByTestId("headerAll");
        expect(linkElement).toBeTruthy();
    })
    
    test('headingText', () => {
        storeRender();
        expect( screen.getByTestId("heading")).toBeTruthy();
    })
    test('logout_exist', () => {
        storeRender();
        expect(screen.getByTestId("logout")).toBeTruthy();
    })
    test('addProduct_exist', () => {
        storeRender();
        expect(screen.getByTestId("add_product")).toBeTruthy();
    })
 
   
    test('addProductbtn', () => {
        storeRender();
        fireEvent.click(screen.getByTestId("add_product"));
        expect(screen.getByTestId("add_product")).toBeTruthy();
    })

    // test('form Appearing', async()=>{
    //   storeRender()
    //     fireEvent.click(screen.getByTestId("add_product"))
    //     const {queryByTestId} = render(<Provider><Form/></Provider>)
    //     await waitFor(()=>{
    //     expect(queryByTestId("totalform")).toBeInTheDocument();
    //     })
    // })

    test('logout', () => {
        storeRender();
        fireEvent.click(screen.getByTestId("logout"));
        expect(screen.getByTestId("logout")).toBeTruthy();
    })

})




