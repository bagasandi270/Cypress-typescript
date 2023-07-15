import {LoginPage} from "../pages/login_pages"
import {DashboardPage} from "../pages/dashboard_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
const URL = 'https://www.saucedemo.com'

describe('Test Suite Sauce Demo - Add Product to Cart', () => {
    it('TC_003 - Positive Test - Add products to cart', () => {
        loginPage.login(URL, 'standard_user', 'secret_sauce')        
  
   
    })
})