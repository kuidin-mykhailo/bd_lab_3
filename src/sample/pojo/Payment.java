package sample.pojo;


import java.time.LocalDate;


public class Payment {

    private int payment_id;
    private String customerFirstName;
    private String customerLastName;
    private int rental_id;
    private String staffFirstName;
    private String staffLastName;
    private LocalDate date;

    public Payment(int payment_id, String customerFirstName, String customerLastName, int rental_id, String staffFirstName, String staffLastName, LocalDate date) {
        this.payment_id = payment_id;
        this.customerFirstName = customerFirstName;
        this.customerLastName = customerLastName;
        this.rental_id = rental_id;
        this.staffFirstName = staffFirstName;
        this.staffLastName = staffLastName;
        this.date = date;
    }


    public String getCustomerLastName() {
        return customerLastName;
    }

    public void setCustomerLastName(String customerLastName) {
        this.customerLastName = customerLastName;
    }

    public String getStaffLastName() {
        return staffLastName;
    }

    public void setStaffLastName(String staffLastName) {
        this.staffLastName = staffLastName;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public int getPayment_id() {
        return payment_id;
    }

    public void setPayment_id(int payment_id) {
        this.payment_id = payment_id;
    }

    public String getCustomerFirstName() {
        return customerFirstName;
    }

    public void setCustomerFirstName(String customerFirstName) {
        this.customerFirstName = customerFirstName;
    }

    public int getRental_id() {
        return rental_id;
    }

    public void setRental_id(int rental_id) {
        this.rental_id = rental_id;
    }

    public String getStaffFirstName() {
        return staffFirstName;
    }

    public void setStaffFirstName(String staffFirstName) {
        this.staffFirstName = staffFirstName;
    }
}
