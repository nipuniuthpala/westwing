export default class wishlist{

    clickOnwishIcon(){
        $('[data-testid="wishlist-icon"]').click()
    }

    getWishListCount(){
      const count=  $('[data-testid="wishlist-counter"]')
      count.waitForExist()
      expect(count).toHaveText("1")
    }

    getWishListCountAfterDelete(){
        const text=  $('[class="wishlistNoProducts__text"]')
        text.waitForExist()
        expect(text).toHaveText("Fügen Sie Produkte hinzu, indem Sie \"Auf Wunschliste\" anklicken")
      }

    goToWishList(){
        $('[class="icon-wishlist"]').click()
    }

    deleteItemInWishList(){

        $('[class="blockListProduct__delete qaBlockListProduct__delete"]').click()
    }
}