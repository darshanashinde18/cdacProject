package com.app.pojos;
//Value type POJO: component in hibernate jargin
//cannot add @Entity n @ID anotation

import javax.persistence.Column;
import javax.persistence.Embeddable;
@Embeddable  //dont create a table and its a value type
public class AdharCard {
	@Column(name="card_number",unique = true,length = 20)
	private String cardNumber;
	
	
	public AdharCard() {
		// TODO Auto-generated constructor stub
	}
	
	


	public AdharCard(String cardNumber) {
		super();
		this.cardNumber = cardNumber;
	}




	public String getCardNumber() {
		return cardNumber;
	}


	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}


	@Override
	public String toString() {
		return "AdharCard [cardNumber=" + cardNumber + "]";
	}

	
	
	

}
