import os
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

os.environ['PATH']+=r"C:/SeleniumDrivers"

driver=webdriver.Chrome()

driver.get("http://localhost:3000")

buttons =driver.find_elements(By.CLASS_NAME,'sc-bWOGAC')

for i in buttons:
    if i.text=='REGISTER':
        i.click()   
        time.sleep(2)
    if i.text=='SIGN IN':
        i.click()
        time.sleep(2)
    else : 
        i.click()
        time.sleep(2)

buttons[1].click()

driver.find_element(By.LINK_TEXT,'CREATE A NEW ACCOUNT').click()
time.sleep(2)

driver.find_element(By.CLASS_NAME,'sc-GKYbw').click()
time.sleep(2)

driver.find_element(By.CLASS_NAME,'sc-ezOQGI').click()
time.sleep(4)


