package stepdefination;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepdefinationclass {
	
	WebDriver driver;
	
	
	@Given("User navigates to facebook application")
	public void user_navigates_to_facebook_application() {
	   System.out.println("user is navigating to the facebook application");
	   System.setProperty("webdriver.chrome.driver", ".\\lib\\chromedriver.exe");
	   driver = new ChromeDriver();
	   driver.get("https://www.facebook.com/");
	}
	
	@When("user enters valid credentials")
	public void user_enters_valid_credentials() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@Then("user logged in successfully")
	public void user_logged_in_successfully() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@When("user enters invalid credentials")
	public void user_enters_invalid_credentials() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@Then("user gets validation message")
	public void user_gets_validation_message() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}




	

}
