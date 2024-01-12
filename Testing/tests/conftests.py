import pytest
import time
from selenium import webdriver

@pytest.fixture
def browser():
    b = webdriver.Chrome()
    b.implicitly_wait(10)
    yield b
    time.sleep(5)
    b.quit()
