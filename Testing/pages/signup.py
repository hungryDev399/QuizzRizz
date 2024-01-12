from selenium.webdriver.common.by import By


class SignupPage:
    def __init__(self, browser):
        self.browser = browser
        self.url = "http://localhost:3000"

    def load(self):
        self.browser.get(self.url)

    def signout(self):
        elementt = self.browser.find_element(By.CLASS_NAME, "text-black")
        return elementt

    def signup(self):
            element = self.browser.find_element(By.CLASS_NAME, "text-black")
            return element
    def returnhome(self):
            element = self.browser.find_element(By.CLASS_NAME, "ms-14")
            return element
