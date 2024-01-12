from pages.TestInput import TextValidation
from pages.signup import SignupPage
from selenium.webdriver.support.ui import Select
import time

def test_textvalidation(browser):
    textvalidation = TextValidation(browser)
    signingup = SignupPage(browser)
    signingout = SignupPage(browser)

    textvalidation.load()

    signingout.signout().click()
    time.sleep(2)

    signingup.signup().click()
    time.sleep(2)

    enter_user_details(textvalidation)

    verify_entered_details(textvalidation)


def enter_user_details(textvalidation):
    textvalidation.name().send_keys("test")
    textvalidation.email().send_keys("s-example.user@zewailcity.edu.eg")
    textvalidation.phone().send_keys("01234567890")
    textvalidation.password().send_keys("123456789")
    textvalidation.confirm_password().send_keys("123456789")
    textvalidation.national_id().send_keys("12345678901234")
    textvalidation.university_id().send_keys("202201393")
    textvalidation.choose_school().click()
    textvalidation.choose_school().click()
    textvalidation.choose_major().click()
    textvalidation.choose_major().click()
    textvalidation.get_submit().click()



def verify_entered_details(textvalidation):
    assert textvalidation.name().get_attribute("value") == "test"
    assert (
   textvalidation.email().get_attribute("value")
        == "s-example.user@zewailcity.edu.eg"
    )
    assert textvalidation.phone().get_attribute("value") == "01234567890"
    assert textvalidation.password().get_attribute("value") == "123456789"
    assert textvalidation.confirm_password().get_attribute("value") == "123456789"
    assert textvalidation.national_id().get_attribute("value") == "12345678901234"
    assert textvalidation.university_id().get_attribute("value") == "202201393"
    assert textvalidation.choose_school()
    assert textvalidation.choose_major()
    assert textvalidation.get_submit()

