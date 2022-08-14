class Profile {
    constructor(name, education, experience, contactInfo) {
        this.name = name
        this.education = education
        this.experience = experience
        this.contactInfo = contactInfo
    }
}

class Education extends InfoItem {
    constructor(title, institution, startDate, endDate) {
        super(title, institution, startDate, endDate)
    }
}

class Experience extends InfoItem {
    constructor(title, institution, startDate, endDate) {
        super(title, institution, startDate, endDate)
    }
}

export default Profile