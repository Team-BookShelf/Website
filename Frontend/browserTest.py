import os
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


os.environ['PATH']+=r"C:/SeleniumDrivers"

# specifies the browser to run the automated testing
driver=webdriver.Chrome()


# tests run on the local host 
driver.get("http://localhost:3000")

# the below code gives list of all elements that have the specified class name
buttons =driver.find_elements(By.CLASS_NAME,'sc-bWOGAC')

for i in buttons:
    if i.text=='REGISTER':
        i.click()
        time.sleep(2)
    if i.text=='SIGN IN':
        i.click()
        time.sleep(2)

# the below line will redirect us to register page from SIGN IN 
driver.find_element(By.LINK_TEXT,'CREATE A NEW ACCOUNT').click()
time.sleep(2)
    


