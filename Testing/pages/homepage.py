from selenium.webdriver.common.by import By


class HomePage:
    def __init__(self, browser):
        self.browser = browser
        self.url = "http://localhost:3000"

    def load(self):
        self.browser.get(self.url)

    def gettingstarted(self):
        return self.browser.find_element(By.CLASS_NAME, "text-zinc-50")
    