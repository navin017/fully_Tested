
import { render, screen, fireEvent, waitFor, userEvent,cleanup, waitForElementToBeRemoved } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store'
import { BrowserRouter } from 'react-router-dom';
import { ProductComponent } from './productComponent';
import { Header } from './header';
import { Form } from './form'
import '@testing-library/jest-dom'
import { deleteProduct } from '../redux/action/productAction';


const storeRender = () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                {/* <ProductComponent />
                <Form /> */}
            </BrowserRouter>
        </Provider>,

    )
}

// beforeEach(()=>{
//       test('view button progress testing', () => {

//         // storeRender();
//         fireEvent.click(screen.getByTitle("view-btn"));
//         expect(screen.getByTitle('view-btn')).toBeTruthy();
//     })
// })




describe("Overall testing for Component Availability", function () {
    // beforeEach=()=> {
    //     storeRender()
    //     };

    // test('Total DIV test', () => {
    //     beforeEach = () => {
    //         storeRender();
    //         const linkElement = screen.getByTestId("all");
    //         expect(linkElement).toBeTruthy();
    //         screen.debug(linkElement)
    //     }
    // })
    // test('component', () => {
    //     storeRender();
    //     expect(screen.getAllByTestId("component")).toBeTruthy();
    // })
    // test('imageComponent', () => {
    //     storeRender();
    //     expect(screen.getAllByTestId("imageComponent")).toBeTruthy();
    // })
    // test('listComponent', () => {
    //     storeRender();
    //     expect(screen.getAllByTestId("listComponent")).toBeTruthy();
    // })
    // test('3Components', () => {
    //     storeRender();
    //     expect(screen.getAllByTestId("3Components")).toBeTruthy();
    // })
    // // DELETE-BUTTON
    // test('Delete Component', async () => {
    //     storeRender();
    //     fireEvent.mouseOver(screen.getAllByTestId('component')[0]);
    //     expect(screen.getByTestId("dlt-icon").firstChild).toBeTruthy();
    // })
    // test('Delete Component PopUp Araisng', () => {
    //     storeRender();
    //     fireEvent.mouseOver(screen.getAllByTestId('component')[0]);
    //     expect(screen.getByTestId("dlt-icon").firstChild).toBeTruthy();
    //     fireEvent.click(screen.getAllByTestId("dlt-icon")[0]);
    //     expect(screen.getByTestId("totPopUp").firstChild).toBeTruthy();
    // })
    // test('Delete Component dissapearing', async() => {
    //     storeRender();
    //     fireEvent.mouseOver(screen.getAllByTestId('component')[0]);
    //     expect(screen.getByTestId("dlt-icon").firstChild).toBeTruthy();
      
    //    fireEvent.mouseLeave(screen.getAllByTestId('component')[0]);
    //    await waitFor(()=>{
    //     expect(screen.queryByTestId("dlt-icon")).not.toBeInTheDocument();
    // })
    // })
    // //POPUP
    // test('popup text Component', () => {
    //     storeRender();
    //     fireEvent.mouseOver(screen.getAllByTestId('component')[0]);
    //     fireEvent.click(screen.getAllByTestId("dlt-icon")[0])
    //     expect(screen.getByTestId("pop-text").firstChild).toBeTruthy();

    // })

    // test('popup button Component', () => {
    //     storeRender();
    //     fireEvent.mouseOver(screen.getAllByTestId('component')[0]);
    //     fireEvent.click(screen.getAllByTestId("dlt-icon")[0])
    //     expect(screen.getByTestId("pop-yes").firstChild).toBeTruthy();

    // })
    // test('popup button Component', () => {
    //     storeRender();
    //     fireEvent.mouseOver(screen.getAllByTestId('component')[0]);
    //     fireEvent.click(screen.getAllByTestId("dlt-icon")[0])
    //     expect(screen.getByTestId("pop-no").firstChild).toBeTruthy();
    //     // expect(screen.queryByTestId("totPopUp")).toBeNull();
    // })

    test('popup "yes" button process Component', async() => {
        await waitFor(async()=>{

        storeRender();
        fireEvent.mouseOver(screen.getAllByTestId("component")[0]);
        const deleteBtn = screen.queryAllByTestId("dlt-icon");
        fireEvent.click(deleteBtn[0])       
        expect(screen.getByTestId("totPopUp").firstChild).toBeTruthy();
        expect(screen.getByTestId("totPopUp")).toHaveTextContent("Are you willing to delete Product ?");
        expect(screen.getByTestId("pop-yes").firstChild).toBeTruthy();
        const popupCloseButton = screen.getByTestId("pop-yes");
        fireEvent.change(popupCloseButton)
        await waitFor(()=>{
        expect(screen.queryByTestId("totPopUp")).toBeNull();
    })


//         expect(screen.queryByTestId("totPopUp")).toBeNull();
//         fireEvent.click(screen.getByTestId('pop-yes'))

 
//   fireEvent.click(screen.getByTestId('pop-yes'), '{del}')

//   expect(deleteProduct).toBeCalled()
//         expect(screen.queryByTestId("component")[0]).toBeNull();
//         console.log(screen.getByTestId('pop-yes'), '{del}')
        })
    })
    
    // test('popup "No" button clicking popup dissapear ', () => {
    //     storeRender();
    //     fireEvent.mouseOver(screen.getAllByTestId('component')[0]);
    //     fireEvent.click(screen.getAllByTestId("dlt-icon")[0])
    //     expect(screen.getByTestId("totPopUp").firstChild).toBeTruthy();
    //     fireEvent.click(screen.getByTestId('pop-no'))
    //     expect(screen.queryByTestId("totPopUp")).toBeNull();
    // })

    // //VIEW BUTTON
    // // .........................................................................
    // test('viewComponent', () => {
    //     storeRender();
    //     expect(screen.getAllByTestId("viewComponent")).toBeTruthy();
    // })

    // test('view button progress testing', () => {
    //     storeRender();
    //     fireEvent.click(screen.getAllByTestId("viewComponent")[0]);
    //     expect(screen.getByTestId('viewDetails').firstChild).toBeInTheDocument();
    // })

    // test('Image Details', () => {
    //     storeRender();
    //     fireEvent.click(screen.getAllByTestId("viewComponent")[0]);
    //     expect(screen.getAllByTestId("imageDetails")).toBeTruthy();
    // })
    // test('Product name Lable', () => {
    //     storeRender();
    //     fireEvent.click(screen.getAllByTestId("viewComponent")[0]);
    //     expect(screen.getAllByTestId("detailsProName")).toBeTruthy();
    // })
    // test('Product Id details', () => {
    //     storeRender();
    //     fireEvent.click(screen.getAllByTestId("viewComponent")[0]);
    //     expect(screen.getAllByTestId("detailsProId")).toBeTruthy();
    // })
    // test('Product size details', () => {
    //     storeRender();
    //     fireEvent.click(screen.getAllByTestId("viewComponent")[0]);
    //     expect(screen.getAllByTestId("detailsProSize")).toBeTruthy();
    // })
    // test('Product Quantity details', () => {
    //     storeRender();
    //     fireEvent.click(screen.getAllByTestId("viewComponent")[0]);
    //     expect(screen.getAllByTestId("detailsProQuantity")).toBeTruthy();
    // })
    // test('Product price details', () => {
    //     storeRender();
    //     fireEvent.click(screen.getAllByTestId("viewComponent")[0]);
    //     expect(screen.getAllByTestId("detailsProPrice")).toBeTruthy();
    // })

    // test('Close-Button', async() => {
    //              storeRender();
    //              fireEvent.click(screen.getAllByTestId("viewComponent")[0]);
    //              expect(screen.getAllByTestId("viewDetails")).toBeTruthy()
    //              await waitFor(()=>{
    //                 fireEvent.click(screen.getByTestId("close-btn"))
    //             })
    //             expect(screen.queryByTestId("viewDetails")).not.toBeInTheDocument();
    //          })
    //     // //EDIT BUTTON
    //     test('editComponent', () => {
    //         storeRender();
    //         expect(screen.getAllByTestId("editComponent")).toBeTruthy();
    //     })
    //     test('proTitle', () => {
    //         storeRender();
    //         expect(screen.getAllByTestId("proTitle")).toBeTruthy();
    //     })
    //     test('editFormHeading', () => {
    //         storeRender();
    //         fireEvent.click(screen.getAllByTestId("editComponent")[0])
    //         expect(screen.getAllByTestId("headDetails")).toBeTruthy();
    //     })
    //     test('editForm ', () => {
    //         storeRender();
    //         fireEvent.click(screen.getAllByTestId("editComponent")[0])
    //         expect(screen.queryByTestId("totalform").firstChild).toBeTruthy();
    //     })
    //     test('editForm ProductName InputBox', () => {
    //         storeRender();
    //         fireEvent.click(screen.getAllByTestId("editComponent")[0])
    //         expect(screen.getAllByTestId("productName")).toBeTruthy();

    //     })

    //     test('editForm inputBox', () => {
    //         storeRender();
    //         fireEvent.click(screen.getAllByTestId("editComponent")[0])
    //         expect(screen.getByTestId("productString")).toBeTruthy();

    //     })

    //     test('editForm inputBox with Data', async () => {
    //         storeRender();
    //         fireEvent.click(screen.getAllByTestId("editComponent")[0])
    //         expect(screen.queryByTestId("totalform").firstChild).toBeTruthy();
    //         fireEvent.click(screen.getByTestId("productString"), { target: { value: 'hello' } })
    //         await waitFor(() => {
    //             expect(screen.getByTestId("productString")).toHaveDisplayValue("hello");
    //         })
    //     })




        //      test('Product ID details', () => {
        //         async()=>{
        //          storeRender();
        //          expect(screen.getAllByTestId("detailsId")).toHaveDisplayValue(1);
        //         }   
        //      })
        //   
        //      test('Product size details', () => {
        //        async()=>{
        //          storeRender();
        //          expect(screen.getAllByTestId("detailsSize")).toHaveDisplayValue("something");
        //        }
        //      })
       
        //      test('Product size details', () => {
        //         async()=>{
        //           storeRender();
        //           expect(screen.getAllByTestId("detailsQuantity")).toHaveDisplayValue("something");
        //         }
        //       })
        //      test('Product size details', () => {
        //         async()=>{
        //           storeRender();
        //           expect(screen.getAllByTestId("detailsPrice")).toHaveDisplayValue("something");
        //         }
        //       })
        //       test('Close-Button', () => {
        //        async()=>{
        //          storeRender();
        //          fireEvent.click(screen.getByTestId("close-btn"))
        //          expect(screen.getByTestId("close-btn")).toBeTruthy();
        //        }
        // //      })
        // test('none of this', () => {
        //     storeRender();
        //     //  render(<Header/>)
        //     fireEvent.click(screen.getByTestId("add_product"))
        //     expect(screen.queryByTestId('form')).toBeInTheDocument()
        //     //  fireEvent.click(screen.getByTestId("formClose"))
        //     //  expect(screen.queryByTestId('totalform')).toBeNull()
        //     //  screen.debug(screen.getByTestId('form'))
        // })
    })

