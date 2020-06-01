package sample.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Update {

    public static void updateCustomerFirstName(String input, String previousName) {
        try {
            Connection connection = DBController.createConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("update customer set first_name = ? where first_name = ?;");
            preparedStatement.setString(1, input);
            preparedStatement.setString(2, previousName);
            preparedStatement.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void updateCustomerLastName(String input, String previousName) {
        try {
            Connection connection = DBController.createConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("update customer set last_name = ? where last_name = ?");
            preparedStatement.setString(1, input);
            preparedStatement.setString(2, previousName);
            preparedStatement.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void updateStaffFirstName(String input, String previousName) {
        try {
            Connection connection = DBController.createConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("update staff set first_name = ? where first_name = ?");
            preparedStatement.setString(1, input);
            preparedStatement.setString(2, previousName);
            preparedStatement.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void updateStaffLastName(String input, String previousName) {
        try {
            Connection connection = DBController.createConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("update staff set last_name = ? where last_name = ?");
            preparedStatement.setString(1, input);
            preparedStatement.setString(2, previousName);
            preparedStatement.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    public static void updatePaymentDate(String input, String previousName) {
        try {
            Connection connection = DBController.createConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("UPDATE payment set payment_date = ? where DATE(payment_date) = ?;");
            preparedStatement.setString(1, input);
            preparedStatement.setString(2, previousName);
            preparedStatement.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


}
