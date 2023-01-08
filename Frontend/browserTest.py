import os
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

os.environ['PATH']+=r"C:/SeleniumDrivers"
service = ChromeService(executable_path="/snap/bin/chromium.chromedriver")
options = webdriver.ChromeOptions()
options.headless = True

driver=webdriver.Chrome(service=service, options=options)

driver.get("http://localhost:3000")

buttons =driver.find_elements(By.CLASS_NAME,'sc-uhnfH')

for i in buttons:
    if i.text=='REGISTER':
        i.click()   
        print(i.text)
        time.sleep(2)
    if i.text=='SIGN IN':
        i.click()
        time.sleep(2)
    if i.text=='RECOMMEND':
        continue
    else : 
        i.click()
        time.sleep(2)

buttons[1].click()
print(buttons[3].text)

driver.find_element(By.LINK_TEXT,'CREATE A NEW ACCOUNT').click()
time.sleep(2)

driver.find_element(By.CLASS_NAME,'sc-WKhSL').click() #Bookshelf
time.sleep(2)

driver.find_element(By.CLASS_NAME,'sc-iAEawV').click() #Image slide right direction
time.sleep(2)

driver.find_element(By.CLASS_NAME,'sc-ilhmMj').click() #shop now
time.sleep(2)

cart_icons=driver.find_elements(By.CLASS_NAME,'sc-jcMfQk')#cart icon

cart_icons[0].click()
time.sleep(2)

'''
driver.find_element(By.XPATH,'//div[@class="sc-iveFHk"]/*[name()="svg"]').click()

isko div m dalwa denge...kaam aasan ho jayga 
'''
c=0
while True:
    driver.find_element(By.CLASS_NAME,'sc-lllmON').click()
    time.sleep(1)
    c=c+1
    if c==2:
        time.sleep(2)
        break


buttons[3].click()
time.sleep(2)

buttons[2].click()
time.sleep(2)


driver.find_element(By.CLASS_NAME,'form-control').send_keys('1984')
time.sleep(2)
driver.find_element(By.CLASS_NAME,'btn').click()
time.sleep(2)