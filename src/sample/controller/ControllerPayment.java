package sample.controller;

import sample.jdbc.DBController;
import sample.pojo.Payment;

import java.sql.*;
import java.time.LocalDate;
import java.util.ArrayList;

public class ControllerPayment {

    private ControllerPayment() {
    }

    static ArrayList<Payment> getData() {
        ArrayList<Payment> payments = new ArrayList<>();
        try (Connection connection = DBController.createConnection()) {
            Statement statement = connection.createStatement();

            ResultSet resultSet = statement.executeQuery(
                    "select payment_id,\n" +
                            "       c.first_name as 'customer_name',\n" +
                            "       c.last_name as 'customer_surname',\n" +
                            "       rental_id,\n" +
                            "       s.first_name as 'staff_name',\n" +
                            "       s.last_name as 'staff_surname',\n" +
                            "       payment_date\n" +
                            "from payment\n" +
                            "         join staff s on payment.staff_id = s.staff_id\n" +
                            "         join customer c on payment.customer_id = c.customer_id\n" +
                            "ORDER BY payment_id;");

            getInfoFromTable(payments, resultSet);
            connection.close();
            return payments;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return payments;
    }

    static void getInfoFromTable(ArrayList<Payment> payments, ResultSet resultSet) throws SQLException {
        while(resultSet.next()) {
            Integer payment_id = resultSet.getInt("payment_id");
            String customerFirstName = resultSet.getString("customer_name");
            String customerLastName = resultSet.getString("customer_surname");
            Integer rental_id = resultSet.getInt("rental_id");
            String staffFirstName = resultSet.getString("staff_name");
            String staffLastName = resultSet.getString("staff_surname");
            LocalDate payment_date = resultSet.getDate("payment_date").toLocalDate();

            payments.add(new Payment(payment_id, customerFirstName, customerLastName, rental_id, staffFirstName,  staffLastName, payment_date));
        }
    }

    static void deleteById(Integer payment_id) {
        try {
            Connection connection = DBController.createConnection();
            String sql = "DELETE FROM payment\n" +
                    "where payment_id = ?;";
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setInt(1, payment_id);
            System.out.println(preparedStatement);
            try {
                preparedStatement.execute();
                System.out.println("Delete successfully");
            } catch (Exception e){
                System.err.println("Delete failed \n" + e.getMessage());
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    static ArrayList<Payment> filterByDate(String fromDate, String toDate) {



        ArrayList<Payment> payments = new ArrayList<>();
        try {
            Connection connection = DBController.createConnection();
            String sql = "select payment_id,\n" +
                    "       c.first_name as 'customer_name',\n" +
                    "       c.last_name as 'customer_surname',\n" +
                    "       rental_id,\n" +
                    "       s.first_name as 'staff_name',\n" +
                    "       s.last_name as 'staff_surname',\n" +
                    "       payment_date\n" +
                    "from payment\n" +
                    "         join staff s on payment.staff_id = s.staff_id\n" +
                    "         join customer c on payment.customer_id = c.customer_id\n" +
                    "WHERE payment_date BETWEEN ? AND ?" +
                    "ORDER BY payment_id;";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setString(1, fromDate);
            statement.setString(2, toDate);
            ResultSet resultSet = statement.executeQuery();
            getInfoFromTable(payments, resultSet);
            connection.close();

            return payments;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return payments;
    }

    static ArrayList<Payment> findFirstName(String firstName) {

        ArrayList<Payment> payments = new ArrayList<>();
        try {
            Connection connection = DBController.createConnection();
            String sql = "select payment_id,\n" +
                    "       c.first_name as 'customer_name',\n" +
                    "       c.last_name as 'customer_surname',\n" +
                    "       rental_id,\n" +
                    "       s.first_name as 'staff_name',\n" +
                    "       s.last_name as 'staff_surname',\n" +
                    "       payment_date\n" +
                    "from payment\n" +
                    "         join staff s on payment.staff_id = s.staff_id\n" +
                    "         join customer c on payment.customer_id = c.customer_id\n" +
                    "WHERE c.first_name = ?" +
                    "ORDER BY payment_id;";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setString(1, firstName);
            ResultSet resultSet = statement.executeQuery();
            getInfoFromTable(payments, resultSet);
            connection.close();

            return payments;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return payments;
    }

    static ArrayList<Payment> findLastName(String lastName) {

        ArrayList<Payment> payments = new ArrayList<>();
        try {
            Connection connection = DBController.createConnection();
            String sql = "select payment_id,\n" +
                    "       c.first_name as 'customer_name',\n" +
                    "       c.last_name as 'customer_surname',\n" +
                    "       rental_id,\n" +
                    "       s.first_name as 'staff_name',\n" +
                    "       s.last_name as 'staff_surname',\n" +
                    "       payment_date\n" +
                    "from payment\n" +
                    "         join staff s on payment.staff_id = s.staff_id\n" +
                    "         join customer c on payment.customer_id = c.customer_id\n" +
                    "WHERE c.last_name = ?" +
                    "ORDER BY payment_id;";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setString(1, lastName);
            ResultSet resultSet = statement.executeQuery();
            getInfoFromTable(payments, resultSet);
            connection.close();

            return payments;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return payments;
    }

    static ArrayList<Payment> findCustomer(String firstName, String lastName) {

        ArrayList<Payment> payments = new ArrayList<>();
        try {
            Connection connection = DBController.createConnection();
            String sql = "select payment_id,\n" +
                    "       c.first_name as 'customer_name',\n" +
                    "       c.last_name as 'customer_surname',\n" +
                    "       rental_id,\n" +
                    "       s.first_name as 'staff_name',\n" +
                    "       s.last_name as 'staff_surname',\n" +
                    "       payment_date\n" +
                    "from payment\n" +
                    "         join staff s on payment.staff_id = s.staff_id\n" +
                    "         join customer c on payment.customer_id = c.customer_id\n" +
                    "WHERE c.first_name = ? and c.last_name = ?" +
                    "ORDER BY payment_id;";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setString(1, firstName);
            statement.setString(2, lastName);
            ResultSet resultSet = statement.executeQuery();
            getInfoFromTable(payments, resultSet);
            connection.close();

            return payments;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return payments;
    }


}
