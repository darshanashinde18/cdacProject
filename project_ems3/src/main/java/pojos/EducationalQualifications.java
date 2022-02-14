package pojos;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

//embeddable value type:UDT
@Embeddable
public class EducationalQualifications {
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
private EduType type;
	@Column(name = "passing_year")
private int passingYear;
private int marks;



public EducationalQualifications() {
	// TODO Auto-generated constructor stub
}

public EducationalQualifications(EduType type, int passingYear, int marks) {
	super();
	this.type = type;
	this.passingYear = passingYear;
	this.marks = marks;
}

public EduType getType() {
	return type;
}

public void setType(EduType type) {
	this.type = type;
}

public int getPassingYear() {
	return passingYear;
}

public void setPassingYear(int passingYear) {
	this.passingYear = passingYear;
}

public int getMarks() {
	return marks;
}

public void setMarks(int marks) {
	this.marks = marks;
}

@Override
public String toString() {
	return "EducationalQualifications [type=" + type + ", passingYear=" + passingYear + ", marks=" + marks + "]";
}




}
