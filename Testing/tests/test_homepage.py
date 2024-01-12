from pages.homepage import HomePage
import time
from conftests import browser
def test_homepage(browser):
    home = HomePage(browser)
    home.load()
    time.sleep(2)
    home.gettingstarted().click()
    assert home.gettingstarted().is_displayed()


