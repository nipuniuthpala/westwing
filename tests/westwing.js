import App  from "../page-objects/pages/App"
import Base from "../page-objects/pages/Base";
import login from "../page-objects/pages/login";
import wishlist from "../page-objects/pages/wishlist";


describe('Westwing Automation',()=>{
    let AppPage;
    let basePage;
    let loginPage;
    let wishlistPage;
    AppPage=new App()
    basePage=new Base()
    loginPage=new login()
    wishlistPage=new wishlist()
     
it('Load Westwing Website',()=>{
        AppPage.openHomePage()
        basePage.pauseShort()
        expect(browser).toHaveUrl("https://www.westwingnow.de/")
        expect(browser).toHaveTitle("Ihr Möbel & Interior Online-Shop | WestwingNow")
        AppPage.getclickCookies();
    })


it('Click on search and get the first item in the list',()=>{
      AppPage.clickOnSearch()
      AppPage.clickSearchItem()
      const text=AppPage.validateSearchItem()
      expect(text).toHaveText("Möbel")
    
})

it('Click on login on registration overlay and login to the site',()=>{
    loginPage.userLogin()
    loginPage.LoginToSite()
    basePage.pauseShort()
    loginPage.ValidateLogin()
  
  
})

it('Click on wish Icon on an item and check wishlist counter',()=>{
    wishlistPage.clickOnwishIcon()
    basePage.pauseMedium()
    wishlistPage.getWishListCount()
  
   
  
})

it('Go to wish List and delete the Item',()=>{
    wishlistPage.goToWishList()
    wishlistPage.deleteItemInWishList()
    basePage.pauseLong()
    wishlistPage.getWishListCountAfterDelete()
  
   
  
})

})