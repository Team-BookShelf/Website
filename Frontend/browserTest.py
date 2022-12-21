import os
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


os.environ['PATH']+=r"C:/SeleniumDrivers"

driver=webdriver.Chrome()

time.sleep(5)

driver.get("http://localhost:3000")


buttons =driver.find_elements(By.CLASS_NAME,'sc-gJqSRm')

for i in buttons:
    if i.text=='REGISTER':
        i.click()
        time.sleep(2)
    if i.text=='SIGNIN':
        i.click()
        time.sleep(2)
    

time.sleep(5)
