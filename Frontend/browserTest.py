import os
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait


os.environ['PATH']+=r"C:/SeleniumDrivers"

driver=webdriver.Chrome()

time.sleep(5)

driver.get("http://localhost:3000")
driver.find_element(By.CLASS_NAME,'MuiSvgIcon-root').click()


time.sleep(5)
