package pojos;

import javax.persistence.*;

@MappedSuperclass //class level anotation to tell JPA(hibernate)
//that ist common super class for all the entities and dont generate any table for it
public class BaseEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	

}
