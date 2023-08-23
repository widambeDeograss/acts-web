import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

{/* <Page style={styles.body}>
        <Text style={styles.title}>
          APPLICATION DETAILS: Personal Information
        </Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Previous study with Global university:
                {applicant_personal_details.global_university_student_no
                ? "Yes"
                : "No"}
              </Text>
            </View>
            <View style={styles.tableCol}> 
            <Text style={styles.tableCell}></Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}></Text> 
          </View> 
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Profile Picture</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Global university studies student no:{" "}
                {applicant_personal_details.global_university_student_no}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}> PIC</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Applicant Family/last name:{"  "}
                {applicant_personal_details.last_name}{" "}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Maiden name: {applicant_personal_details.maiden_name}{" "}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                First name: {applicant_personal_details.first_name}{" "}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Middle name: {applicant_personal_details.maiden_name}{" "}
              </Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Date of Birth: {applicant_personal_details.date_of_birth}{" "}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Tittle: {applicant_personal_details.Title}{" "}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Marital status: {applicant_personal_details.marital_status}{" "}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Gender: {applicant_personal_details.gender}{" "}
              </Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Home address: {applicant_personal_details.home_address}{" "}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Country of residence:{" "}
                {applicant_personal_details.contry_of_residence}{" "}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
              Country of citizenship:{" "}
                {applicant_personal_details.contry_of_citizenship}{" "}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Email address: {applicant_personal_details.email}{" "}
              </Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Primary Language spoken:{" "}
                {applicant_personal_details.primary_language}{" "}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Primary Phone: {applicant_personal_details.primary_phone}{" "}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Present Occupation:{" "}
                {applicant_personal_details.present_occcupation}{" "}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Other Phone: {applicant_personal_details.other_phone}{" "}
              </Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                How did you hear about us:{" "}
                {applicant_personal_details.how_hear_about_us}{" "}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Internet:{" "}
                {applicant_personal_details.how_hear_about_us_internet}{" "}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Magazine:{" "}
                {applicant_personal_details.how_hear_about_us_magazine}{" "}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Other: {applicant_personal_details.how_hear_about_us_other}{" "}
              </Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Primary Religious Affiliation:{" "}
                {applicant_personal_details.primary_rerigious_affiliation}{" "}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Other Primary Religious Affiliation:{" "}
                {applicant_personal_details.other_primary_rerigious_affiliation}{" "}
              </Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Ministerial cridentials Organization:{" "}
                {applicant_personal_details.ministerial_organization}{" "}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                District: {applicant_personal_details.ministerial_organization}{" "}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Cridential level:{" "}
                {applicant_personal_details.how_hear_about_us_magazine}{" "}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Date obtained:{" "}
                {applicant_personal_details.how_hear_about_us_other}{" "}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                Country: {applicant_personal_details.how_hear_about_us_other}{" "}
              </Text>
            </View>
          </View>
        </View>
      </Page> */}
