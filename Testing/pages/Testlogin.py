from pages.signin import SignInPage
from selenium.webdriver.common.by import By


class LoginValidation(SignInPage):
    inputid = (By.ID, "inputid")
    inputpassword = (By.ID, "inputpass")
    submit = (By.ID, "submitbtn")


    def __init__(self, browser):
        self.browser = browser
        self.url = "http://localhost:3000"
    def load(self):
        self.browser.get(self.url)
    def get_inputid(self):
        return self.browser.find_element(*self.inputid)
    def get_inputpassword(self):
        return self.browser.find_element(*self.inputpassword)
    def get_submit(self):
        return self.browser.find_element(*self.submit)

