import {LoginPage} from "../pages/login_pages"
import {DashboardPage} from "../pages/dashboard_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
const URL = 'https://www.saucedemo.com'

describe('Test Suite Sauce Demo - Checkout', () => {
    it('TC_004 - Positive Test - Checkout', () => {
        loginPage.login(URL, 'standard_user', 'secret_sauce')
        loginPage.assertLogin()
        dashboardPage.add_SauceLabsBackpack_toCart()
        dashboardPage.add_SauceLabsBikeLight_toCart()
        dashboardPage.add_SauceLabsBoltTShirt_toCart()
        dashboardPage.assert_addedToCart()
        dashboardPage.openCart()
        dashboardPage.assert_openCart()
        dashboardPage.clickCheckout()
        dashboardPage.formCheckout('Dwiky', 'Kurniawan', '55142')
        dashboardPage.clickContinue()
        dashboardPage.assert_Checkout_Overview()
        dashboardPage.clickFinish()
        dashboardPage.assert_finishCheckout()
    })

    it('TC_005 - Negative Test - Checkout', () => {
        loginPage.login(URL, 'standard_user', 'secret_sauce')
        loginPage.assertLogin()
        dashboardPage.add_SauceLabsBackpack_toCart()
        dashboardPage.add_SauceLabsBikeLight_toCart()
        dashboardPage.add_SauceLabsBoltTShirt_toCart()
        dashboardPage.assert_addedToCart()
        dashboardPage.openCart()
        dashboardPage.assert_openCart()
        dashboardPage.clickCheckout()
        dashboardPage.formCheckout('{backspace}', 'Kurniawan', '55142')
        dashboardPage.clickContinue()
        dashboardPage.assert_formCheckout_Fail()
    })
})