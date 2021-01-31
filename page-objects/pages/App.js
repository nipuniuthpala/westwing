export default class App{
    openHomePage(){
        browser.url("https://www.westwingnow.de/")
    }

    getclickCookies(){
       return $('#onetrust-accept-btn-handler').click()

    }

    clickOnSearch(){
        return $('[data-testid="search-input"]').setValue("möbel")
 
     }

     clickSearchItem(){
     return $('[class="StyledText__StyledTextSpan-sc-1e7aeeo-3 Item__SuggestionText-sc-184dx11-1 iVSbLE dHJkv"]').click()
     
     }

     validateSearchItem(){
       return  $('[class="RegularTitle__StyledPageTitle-zjo017-0 gCzFWF"]')
      
        
        }
}


