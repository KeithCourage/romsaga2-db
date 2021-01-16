# This script formats the cvs file from the database into an array for Angular
# It looks for a file called input.csv, or a filename can be specified with -f

import getopt, sys

# importing csv module 
import csv 
  
arguments = sys.argv[1:]
options = 'f:'
longOptions = ["file"]

# csv file name 
filename = "input.csv"

try: 
    # Parsing argument 
    arguments, values = getopt.getopt(arguments, options, longOptions) 
      
    # checking each argument 
    for currentArgument, currentValue in arguments: 
        if currentArgument in ("-f", "--file"):
            filename = currentValue;
except getopt.error as err: 
    # output error, and return with an error code 
    print (str(err)) 

print("processing file: " + filename)
  
# initializing the titles and rows list 
fields = [] 
rows = []
  
# reading csv file 
with open(filename, 'r') as csvfile: 
    # creating a csv reader object 
    csvreader = csv.reader(csvfile, delimiter='|') 
      
    # extracting field names through first row 
    fields = next(csvreader) 
    print("fields: " + ', '.join(fields))
  
    # extracting each data row one by one 
    for row in csvreader: 
        rows.append(row) 
  
    # get total number of rows 
    print("Total no. of rows: %d"%(csvreader.line_num)) 

#create formatted file for angular
finalOutput = "import { TechData } from \"./tech-data.model\";\n\nexport const techs: TechData[] = [\n"  

for row in rows:
    entry = "\t{\n"
    i = 0
    for col in row:
        # print("parsing: " + col)
        fieldFormatted = fields[i].replace(' ', '').replace('?', '')
        fieldFormatted = fieldFormatted[0].lower() + fieldFormatted[1:]
        colFormatted = col.replace('\'', '\\\'').replace('\n', '')
        entry += "\t\t" + fieldFormatted + ": '" + colFormatted + "',\n"
        i += 1
    entry += "\t},\n"
    finalOutput += entry
    
finalOutput += "]"

outFile = open("techs.ts", "w")
n = outFile.write(finalOutput)
outFile.close()

print('file formatted')
