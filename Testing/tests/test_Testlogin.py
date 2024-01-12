from selenium.webdriver.chrome.webdriver import WebDriver
from pages.Testlogin import LoginValidation
from pages.signup import SignupPage
from pages.signin import SignInPage
from conftests import browser
import time
def test_loginvalidation(browser: WebDriver):
    loginvalidation = LoginValidation(browser)
    signingin = SignInPage(browser)
    signingout = SignupPage(browser)

    loginvalidation.load()
    time.sleep(2)
    signingout.signout().click()
    time.sleep(2)

    signingin.signin().click()
    time.sleep(2)
    enter_user_details(loginvalidation)
    verify_entered_details(loginvalidation)
    submittingdata(loginvalidation)
    loginvalidation.get_submit().click()

def enter_user_details(loginvalidation):
    loginvalidation.get_inputid().send_keys("202201393")
    loginvalidation.get_inputpassword().send_keys("password")
def verify_entered_details(loginvalidation):
    assert loginvalidation.get_inputid().get_attribute("value") == "202201393"
    assert loginvalidation.get_inputpassword().get_attribute("value") == "password"
def submittingdata(loginvalidation):
    assert loginvalidation.get_submit()
 