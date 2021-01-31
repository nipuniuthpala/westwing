export default class login{
 userLogin(){
     return $('[data-testid="login-button"]').click()
 }

 LoginToSite(){
     $('[data-testid="long-register-email-field"]').setValue("nipuniuthpala@gmail.com")
     $('[data-testid="long-register-password-field"]').setValue("nipuni1982")
     $('[data-testid="login_reg_submit_btn"]').click()

}

ValidateLogin(){
    const text=$('[class="IconsButtonTray__MenuLabel-sc-1k6jcrl-2 IconsButtonTray__MenuSubLabel-sc-1k6jcrl-3 gytVHK bnYjlp"]')
    text.waitForExist()
    expect(text).toHaveText("Nipuni")



}
}