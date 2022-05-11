package com.brown.main.recsys;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

/**
 * This is a file parsing class that reads each line from a .txt file.
 */
public class KeyParser {

    private BufferedReader reader;

    /**
     * This creates the buffered reader object used to read the files.
     * @param file file to parse key from
     */
    public KeyParser(String file) {
        try {
            this.reader = new BufferedReader(new FileReader(file));
        } catch (FileNotFoundException e) {
            System.out.println("ERROR: File Not Found");
        }
    }

    /**
     * This returns the next read line from the file.
     * @return next line
     */
    public String readLine() {
        if (this.reader != null) {
            try {
                return this.reader.readLine();
            } catch (IOException e) {
                System.out.println("ERROR: Could Not Read Line");
            }
        }
        return null;
    }
}
