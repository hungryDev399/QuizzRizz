from pages.signup import SignupPage
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select

class TextValidation(SignupPage):
    nameinput = (By.ID, "name")
    emailinput = (By.ID, "email")
    phoneinput = (By.ID, "phone")
    passwordinput = (By.ID, "password")
    Confirmpasswordinput = (By.ID, "confirm_password")
    NationalIdinput = (By.ID, "national_id")
    UniversityIdinput = (By.ID, "university_id")
    ChooseSchool = (By.ID, "school")
    CSAI_option = (By.ID, "CSAI")
    Science_option = (By.XPATH, "//*[@id='root']/div[1]/div/div[1]/div/div/form/div[1]/select/option[3]")
    Engineering_option = (By.XPATH, "//*[@id='root']/div[1]/div/div[1]/div/div/form/div[1]/select/option[4]")
    Buisness_option = (By.XPATH, "//*[@id='root']/div[1]/div/div[1]/div/div/form/div[1]/select/option[5]")
    ChooseMajor =(By.ID, "major")
    SWD_option = (By.ID, 'SWD')
    DSAI_option = (By.XPATH, "//*[@id='root']/div[1]/div/div[1]/div/div/form/div[2]/select/option[3]")
    IT_option = (By.XPATH, "//*[@id='root']/div[1]/div/div[1]/div/div/form/div[2]/select/option[4]")
    Buisness_option = (By.XPATH, "//*[@id='root']/div[1]/div/div[1]/div/div/form/div[2]/select/option[5]")
    BMS_option = (By.XPATH, "//*[@id='root']/div[1]/div/div[1]/div/div/form/div[2]/select/option[6]")
    Physics_option = (By.XPATH, "//*[@id='root']/div[1]/div/div[1]/div/div/form/div[2]/select/option[7]")
    Nanotechnology_option = (By.XPATH, "//*[@id='root']/div[1]/div/div[1]/div/div/form/div[2]/select/option[8]")
    Nanoscience_option = (By.XPATH, "//*[@id='root']/div[1]/div/div[1]/div/div/form/div[2]/select/option[9]")
    enviromental_option = (By.XPATH, "//*[@id='root']/div[1]/div/div[1]/div/div/form/div[2]/select/option[10]")
    renewable_option = (By.XPATH, "//*[@id='root']/div[1]/div/div[1]/div/div/form/div[2]/select/option[11]")
    CIE_option = (By.XPATH, "//*[@id='root']/div[1]/div/div[1]/div/div/form/div[2]/select/option[12]")
    Aerospace_option = (By.XPATH, "//*[@id='root']/div[1]/div/div[1]/div/div/form/div[2]/select/option[13]")
    Submitting = (By.ID, "submitbtn")
    Home = (By.CLASS_NAME, "ms-14")


    def __init__(self, browser):
        self.browser = browser
        self.url = "http://localhost:3000"

    def load(self):
        self.browser.get(self.url)

    def name(self):
        return self.browser.find_element(*self.nameinput)

    def email(self):
        return self.browser.find_element(*self.emailinput)

    def phone(self):
        return self.browser.find_element(*self.phoneinput)

    def password(self):
        return self.browser.find_element(*self.passwordinput)

    def confirm_password(self):
        return self.browser.find_element(*self.Confirmpasswordinput)

    def national_id(self):
        return self.browser.find_element(*self.NationalIdinput)

    def university_id(self):
        return self.browser.find_element(*self.UniversityIdinput)
    def choose_school(self):
        return self.browser.find_element(*self.ChooseSchool)
    def choose_major(self):
        return self.browser.find_element(*self.ChooseMajor)
    def csai(self):
        return self.browser.find_element(*self.CSAI_option)
    def science(self):
        return self.browser.find_element(*self.Science_option)
    def engineering(self):
        return self.browser.find_element(*self.Engineering_option)
    def buisness(self):
        return self.browser.find_element(*self.Buisness_option)
    def swd(self):
        return self.browser.find_element(*self.SWD_option)
    def dsai(self):
        return self.browser.find_element(*self.DSAI_option)
    def it(self):
        return self.browser.find_element(*self.IT_option)
    def bms(self):
        return self.browser.find_element(*self.BMS_option)
    def physics(self):
        return self.browser.find_element(*self.Physics_option)
    def nanotechnology(self):
        return self.browser.find_element(*self.Nanotechnology_option)
    def nanoscience(self):
        return self.browser.find_element(*self.Nanoscience_option)
    def enviromental(self):
        return self.browser.find_element(*self.enviromental_option)
    def renewable(self):
        return self.browser.find_element(*self.renewable_option)
    def cie(self):
        return self.browser.find_element(self.CIE_option)
    def aerospace(self):
        return self.browser.find_element(*self.Aerospace_option)
    def get_submit(self):
        return self.browser.find_element(*self.Submitting)
    def get_home(self):
        return self.browser.find_element(*self.Home)
    
