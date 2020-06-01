package sample.controller;

import javafx.beans.property.SimpleIntegerProperty;
import javafx.beans.property.SimpleObjectProperty;
import javafx.beans.property.SimpleStringProperty;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.control.cell.TextFieldTableCell;
import javafx.stage.Stage;
import javafx.util.converter.LocalDateStringConverter;
import sample.Collections;
import sample.jdbc.Update;
import sample.pojo.Payment;

import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;


public class Controller {



    @FXML
    private TableView<Payment> tablePayments;

    @FXML
    private TableColumn<Payment, Integer> paymnet_id;

    @FXML
    private TableColumn<Payment, String> customerFirstName;

    @FXML
    private TableColumn<Payment, String> customerLastName;

    @FXML
    private TableColumn<Payment, String> staffFirstName;

    @FXML
    private TableColumn<Payment, String> staffLastName;

    @FXML
    private TableColumn<Payment, Integer> rental_id;

    @FXML
    private TableColumn<Payment, LocalDate> date;

    @FXML
    private Button removeButton;

    @FXML
    private Button filterButton;

    @FXML
    private Button resetButton;

    @FXML
    private DatePicker fromDate;

    @FXML
    private DatePicker toDate;

    @FXML
    private CheckBox nameCheck;

    @FXML
    private CheckBox surnameCheck;

    @FXML
    private TextField nameTextField;

    @FXML
    private TextField surnameTextField;

    @FXML
    private Button findButton;

    public static boolean confirmStatus = false;

    // инициализируем форму данными
    @FXML
    private void initialize() {
        initData();

        // устанавливаем тип и значение которое должно хранится в колонке
        paymnet_id.setCellValueFactory(cellDataFeatures -> new SimpleIntegerProperty(cellDataFeatures.getValue().getPayment_id()).asObject());
        customerFirstName.setCellValueFactory(cellDataFeatures -> new SimpleStringProperty(cellDataFeatures.getValue().getCustomerFirstName()));
        customerLastName.setCellValueFactory(cellDataFeatures -> new SimpleStringProperty(cellDataFeatures.getValue().getCustomerLastName()));
        staffFirstName.setCellValueFactory(cellDataFeatures -> new SimpleStringProperty(cellDataFeatures.getValue().getStaffFirstName()));
        staffLastName.setCellValueFactory(cellDataFeatures -> new SimpleStringProperty(cellDataFeatures.getValue().getStaffLastName()));
        rental_id.setCellValueFactory(cellDataFeatures -> new SimpleIntegerProperty(cellDataFeatures.getValue().getRental_id()).asObject());
        date.setCellValueFactory(cellDataFeatures -> new SimpleObjectProperty<>(cellDataFeatures.getValue().getDate()));

        tablePayments.setEditable(true);

        customerFirstName.setCellFactory(TextFieldTableCell.forTableColumn());
        customerFirstName.setOnEditCommit(e -> {
            String old = e.getOldValue();
            createConfirmWindow();
            if (confirmStatus) {
                e.getTableView().getItems().get(e.getTablePosition().getRow()).setCustomerFirstName(e.getNewValue());
                String input = e.getNewValue();
                Update.updateCustomerFirstName(input, old);
            } else {
                tablePayments.refresh();
            }
        });

        customerLastName.setCellFactory(TextFieldTableCell.forTableColumn());
        customerLastName.setOnEditCommit(e -> {
            String old = e.getOldValue();
            createConfirmWindow();
            if (confirmStatus) {
                e.getTableView().getItems().get(e.getTablePosition().getRow()).setCustomerLastName(e.getNewValue());
                String input = e.getNewValue();
                Update.updateCustomerLastName(input, old);
            } else {
                tablePayments.refresh();
            }
        });

        staffFirstName.setCellFactory(TextFieldTableCell.forTableColumn());
        staffFirstName.setOnEditCommit(e -> {
            String old = e.getOldValue();
            createConfirmWindow();
            if (confirmStatus) {
                e.getTableView().getItems().get(e.getTablePosition().getRow()).setStaffFirstName(e.getNewValue());
                String input = e.getNewValue();
                Update.updateStaffFirstName(input, old);
            } else {
                tablePayments.refresh();
            }
        });

        staffLastName.setCellFactory(TextFieldTableCell.forTableColumn());
        staffLastName.setOnEditCommit(e -> {
            String old = e.getOldValue();
            createConfirmWindow();
            if (confirmStatus) {
                e.getTableView().getItems().get(e.getTablePosition().getRow()).setStaffLastName(e.getNewValue());
                String input = e.getNewValue();
                Update.updateStaffLastName(input, old);
            } else {
                tablePayments.refresh();
            }
        });


        date.setCellFactory(TextFieldTableCell.forTableColumn(new LocalDateStringConverter()));
        date.setOnEditCommit(e -> {
            String old = e.getOldValue().toString();
            createConfirmWindow();
            if (confirmStatus) {
                e.getTableView().getItems().get(e.getTablePosition().getRow()).setDate(e.getNewValue());
                String input = e.getNewValue().toString();
                System.out.println(input + " " + old);
                Update.updatePaymentDate(input, old);
            } else {
                tablePayments.refresh();
            }
        });


        // заполняем таблицу данными
        tablePayments.setItems(Collections.cityData);

        tablePayments.getSelectionModel().setSelectionMode(SelectionMode.SINGLE);

        removeButton.setOnAction(actionEvent -> {
            createConfirmWindow();
            if(confirmStatus) {
                ObservableList<Payment> accountsSelected = tablePayments.getSelectionModel().getSelectedItems();
                ArrayList<Payment> items = new ArrayList<>(tablePayments.getSelectionModel().getSelectedItems());
                Collections.cityData.removeAll(accountsSelected);
                tablePayments.getSelectionModel().clearSelection();
                ControllerPayment.deleteById(items.get(0).getPayment_id());
                System.out.println(items.get(0).getCustomerFirstName());
            } else {
                tablePayments.refresh();
            }

        });

        filterButton.setOnAction(actionEvent -> {
            LocalDate date = fromDate.getValue();
            System.out.println(date);
            if (!date.isBefore(toDate.getValue())) {
                createErrorWindow();
            } else {
                Collections.cityData.clear();
                Collections.cityData.addAll(ControllerPayment.filterByDate(fromDate.getValue().toString(), toDate.getValue().toString()));
            }
        });

        resetButton.setOnAction(actionEvent -> {
            Collections.cityData.clear();
            Collections.cityData.addAll(ControllerPayment.getData());
        });

        nameCheck.setOnAction(actionEvent -> {
            if(nameCheck.isSelected()) {
                nameTextField.setDisable(false);
            } else {
                nameTextField.setDisable(true);
            }
        });

        surnameCheck.setOnAction(actionEvent -> {
            if(surnameCheck.isSelected()) {
                surnameTextField.setDisable(false);
            } else {
                surnameTextField.setDisable(true);
            }
        });

        findButton.setOnAction(actionEvent -> {
            if(nameCheck.isSelected() && surnameCheck.isSelected()) {
                Collections.cityData.clear();
                Collections.cityData.addAll(ControllerPayment.findCustomer(nameTextField.getText(), surnameTextField.getText()));

            } else if (nameCheck.isSelected()) {
                Collections.cityData.clear();
                Collections.cityData.addAll(ControllerPayment.findFirstName(nameTextField.getText()));

            } else if (surnameCheck.isSelected()) {
                Collections.cityData.clear();
                Collections.cityData.addAll(ControllerPayment.findLastName(surnameTextField.getText()));
            }
        });

    }

    private void initData() {
        Collections.cityData.addAll(ControllerPayment.getData());
    }

    public void createConfirmWindow() {
        FXMLLoader loader = new FXMLLoader();
        loader.setLocation(getClass().getResource("../views/confirm.fxml"));
        try {
            loader.load();
        } catch (IOException e) {
            e.printStackTrace();
        }
        Parent root = loader.getRoot();
        Stage stage = new Stage();
        stage.setScene(new Scene(root));
        stage.setResizable(false);
        stage.showAndWait();
    }

    public void createErrorWindow() {
        FXMLLoader loader = new FXMLLoader();
        loader.setLocation(getClass().getResource("../views/error.fxml"));
        try {
            loader.load();
        } catch (IOException e) {
            e.printStackTrace();
        }
        Parent root = loader.getRoot();
        Stage stage = new Stage();
        stage.setScene(new Scene(root));
        stage.setResizable(false);
        stage.showAndWait();
    }

}