package sample.jdbc;

import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class DBController {
    public static Connection createConnection() {
        FileInputStream fis;
        Properties property = new Properties();
        try {
            fis = new FileInputStream("resources/bundles/Info.properties");
            property.load(fis);
        } catch (IOException e) {
            System.err.println("File with resources does not exits");
            return null;
        }

        try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            System.err.println("Class com.mysql.jdbc.Driver does not exist");
            return null;
        }
        Connection connection = null;
        try {
            connection = DriverManager.getConnection(property.getProperty("url"),
                    property.getProperty("userName"),
                    property.getProperty("password"));
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println(e.getErrorCode());
        }
        return connection;
    }
}
