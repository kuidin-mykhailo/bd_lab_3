package sample.controller;

import javafx.fxml.FXML;
import javafx.scene.control.Button;

public class ErrorController {

    @FXML
    private Button okButton;

    @FXML
    private void initialize() {
        okButton.setOnAction(actionEvent -> {
            okButton.getScene().getWindow().hide();
        });
    }

}
