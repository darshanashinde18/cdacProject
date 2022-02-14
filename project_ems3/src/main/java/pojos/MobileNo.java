package pojos;
//Value type POJO: component in hibernate jargin
//cannot add @Entity n @ID anotation

import javax.persistence.Column;
import javax.persistence.Embeddable;
@Embeddable  //dont create a table and its a value type
public class MobileNo {
	@Column(name="mobile_number",unique = true,length = 20)
	private String mobileNo;
	
	
	public MobileNo() {
		// TODO Auto-generated constructor stub
	}


	public MobileNo(String mobileNo) {
		super();
		this.mobileNo = mobileNo;
	}


	public String getMobileNo() {
		return mobileNo;
	}


	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}


	@Override
	public String toString() {
		return "MobileNo [mobileNo=" + mobileNo + "]";
	}




	
	
	

}
