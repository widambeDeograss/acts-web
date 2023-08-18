import React from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import { Font } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 2,
    borderBottomWidth: 2,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const ApplicationPdf = () => {
  const applicant_personal_details = JSON.parse(
    localStorage.getItem("applicant_personal_details")
  );
  const referee_pastors_list = JSON.parse(
    localStorage.getItem("referee_pastors_list")
  );
  const referee_employers_list = JSON.parse(
    localStorage.getItem("referee_employers_list")
  );
  const applicant_education_data = JSON.parse(
    localStorage.getItem("applicant_education_data")
  );

  console.log(applicant_personal_details);
  console.log(referee_employers_list);
  console.log(referee_pastors_list);
  console.log(applicant_education_data);

  return (
    <Document>
      <Page style={styles.body}>
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
      </Page>
      <Page style={styles.body}>
        <Text style={styles.title}> APPLICATION DETAILS: References</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Pastors Name </Text>
            </View>

            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Address </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Phone </Text>
            </View>
          </View>
          {referee_pastors_list.map(({ name, address, phone }, key) => {
            return (
              <View key={name}>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{name} </Text>
                  </View>

                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{address} </Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{phone} </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Educator|Employer name </Text>
            </View>

            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Address </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Phone </Text>
            </View>
          </View>
          {referee_employers_list.map(({ name, address, phone }, key) => {
            return (
              <View key={name}>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{name} </Text>
                  </View>

                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{address} </Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{phone} </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
        <Text style={styles.title}>
          {" "}
          APPLICATION DETAILS: Academic Information
        </Text>

        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>School Name </Text>
          </View>

          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>City/state/country </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Dates attended </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Major-Degrees </Text>
          </View>
         
          {applicant_education_data.educatorsList?.map(
            ({ name, city, dates, major, Degrees }, key) => {
              return (
                <View key={name}>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{name} </Text>
                    </View>

                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{city} </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{dates} </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{major}-{Degrees} </Text>
                    </View>
                
                  </View>
                </View>
              );
            }
          )}
        </View>

        <View>
          <Text style={styles.title}>
            APPLICATION DETAILS: Program of study
          </Text>
          <Text style={styles.text}>
            Program of study:
            {applicant_education_data.take_masters
              ? "Masters Program"
              : "Phd Program"}
          </Text>
          <Text style={styles.text}>
            Masters Program:{" "}
            {applicant_education_data.take_masters && (
              <Text style={styles.title}>
                {applicant_education_data.marsters_course}
              </Text>
            )}
          </Text>
          <Text style={styles.title}>
            Mode of study you want to use:{" "}
            {applicant_education_data.residetial_student
              ? "Residential"
              : "Non Residential"}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default ApplicationPdf;
