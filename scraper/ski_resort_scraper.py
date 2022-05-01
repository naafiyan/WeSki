import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# load each line from ./urls_to_scrape.txt
with open('./urls_to_scrape.txt') as f:
    urls = f.readlines()
    f.close()

    #url of the page we want to scrape
    for url in urls:
        # initiating the webdriver. Parameter includes the path of the webdriver.
        driver = webdriver.Chrome('./chromedriver') 
        driver.get(url) 
        
        # this is just to ensure that the page is loaded
        time.sleep(5) 
        
        html = driver.page_source
        
        # this renders the JS code and stores all
        # of the information in static HTML code.
        soup = BeautifulSoup(html, "html.parser")
        
        # Now, we could simply apply bs4 to html variable
        name = soup.find_all('span', {"class": "h2"})[0].text
        # remove text from end of name till colon (inclusive)
        name = name[:name.find(':')]

        weather = soup.find('span', {'title': 'Temperature'}).text

        trails = soup.find('div', string=['Runs Open']).previous_sibling.text

        snowfall = soup.find('span', {'title': '72 Hour Snowfall'}).text

        base = soup.find('div', {'title': 'Base'}).next_sibling.find_all()[0].text
        # remove text from end till "
        base = base[:base.find('"')]

        print(name)
        print(base)
        print(weather)
        print(trails)
        print(snowfall)
        driver.close() # closing the webdriver