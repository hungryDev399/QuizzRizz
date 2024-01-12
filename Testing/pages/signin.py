from selenium.webdriver.common.by import By
class SignInPage:
    def __init__(self, browser):
        self.browser = browser
        self.url = "http://localhost:3000"
    def load(self):
        self.browser.get(self.url)
    def signin(self):
        element = self.browser.find_element(By.ID, "Signin")
        return element