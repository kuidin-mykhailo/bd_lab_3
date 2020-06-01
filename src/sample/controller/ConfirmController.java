package sample.controller;

import javafx.fxml.FXML;
import javafx.scene.control.Button;


public class ConfirmController{

    @FXML
    private Button confirmButton;

    @FXML
    private Button cancelButton;

    @FXML
    private void initialize() {
        confirmButton.setOnAction(actionEvent -> {
            Controller.confirmStatus = true;
            confirmButton.getScene().getWindow().hide();
        });
        cancelButton.setOnAction(actionEvent -> {
            Controller.confirmStatus = false;
            cancelButton.getScene().getWindow().hide();
        });
    }

}
