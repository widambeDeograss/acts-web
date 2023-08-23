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
import logo from "../assets/logo.png";

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
    width: "33.3%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
  },
  tableColl: {
    width: "20%",
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
    fontWeight: "extrabold",
  },
  text: {
    margin: 5,
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
        <View style={{ alignItems: "center", marginBottom:20, borderBottom:1   }}>
          <Text style={{ fontWeight: "extrabold", marginTop:20 }}>
            AFRICA’S CONTINENTAL THEOLOGICAL SEMINARY (ACTS)
          </Text>
          <Image src={logo} style={{ height: 60, width: 60 }} />
        </View>
        <View>
          <Text
            style={[
              styles.title,
              { alignItems: "flex-start", fontWeight: "demibold", marginBottom:20},
            ]}
          >
            APPLICATION DETAILS: Personal Information
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={styles.text}>
                Previous study with Global university :
                {applicant_personal_details.global_university_student_no
                  ? "Yes"
                  : "No"}
              </Text>
              <Text style={styles.text}>
                Global university studies student No :{" "}
                <Text style={styles.title}>
                  {applicant_personal_details.global_university_student_no}
                </Text>
              </Text>
              <Text style={styles.text}>
                Applicant Family/last name : {"  "}
                <Text style={styles.title}>
                  {applicant_personal_details.last_name}{" "}
                </Text>
              </Text>
              <Text style={styles.text}>
                Maiden name :
                <Text style={styles.title}>
                  {applicant_personal_details.maiden_name}{" "}
                </Text>
              </Text>

              <Text style={styles.text}>
                First name :{" "}
                <Text style={styles.title}>
                  {applicant_personal_details.first_name}{" "}
                </Text>
              </Text>
              <Text style={styles.text}>
                Middle name :{" "}
                <Text style={styles.title}>
                  {applicant_personal_details.maiden_name}{" "}
                </Text>
              </Text>
            </View>
            <View>
              <Text style={styles.text}>Applicant Picture</Text>
              <View style={{ height: 100, width: 130, borderWidth:1 }}>
              <Text style={[styles.text, {fontSize:5, justifyContent:"center", textAlign:"center", marginTop:50}]}>Your Passport here</Text>
               
              </View>
              {/* <Image src={applicant_personal_details.passprt}  /> */}
            </View>
          </View>
          <Text style={styles.text}>
            Date of Birth :{" "}
            <Text style={styles.title}>
              {applicant_personal_details.date_of_birth}{" "}
            </Text>
          </Text>
          <Text style={styles.text}>
            Tittle :{" "}
            <Text style={styles.title}>
              {applicant_personal_details.Title}{" "}
            </Text>
          </Text>
          <Text style={styles.text}>
            Marital status :{" "}
            <Text style={styles.title}>
              {applicant_personal_details.marital_status}{" "}
            </Text>
          </Text>
          <Text style={styles.text}>
            Gender :{" "}
            <Text style={styles.title}>
              {applicant_personal_details.gender}{" "}
            </Text>
          </Text>
          <Text style={styles.text}>
            Home address :{" "}
            <Text style={styles.title}>
              {applicant_personal_details.home_address}{" "}
            </Text>
          </Text>
          <Text style={styles.text}>
            Country of citizenship:{" "}
            <Text style={styles.title}>
              {applicant_personal_details.contry_of_citizenship}{" "}
            </Text>
          </Text>
          <Text style={styles.text}>
            Email address :{" "}
            <Text style={styles.title}>
              {applicant_personal_details.email}{" "}
            </Text>
          </Text>
          <Text style={styles.text}>
            Primary Phone :{" "}
            <Text style={styles.title}>
              {applicant_personal_details.primary_phone}{" "}
            </Text>
          </Text>
          <Text style={styles.text}>
            Other Phone :{" "}
            <Text style={styles.title}>
              {applicant_personal_details.other_phone}{" "}
            </Text>
          </Text>
          <Text style={styles.text}>
            Primary Language spoken :{" "}
            <Text style={styles.title}>
              {applicant_personal_details.primary_language}{" "}
            </Text>
          </Text>
          <Text style={styles.text}>
            Present Occupation :{" "}
            <Text style={styles.title}>
              {applicant_personal_details.present_occcupation}{" "}
            </Text>
          </Text>
          
        </View>
      </Page>

      <Page style={styles.body}>
      <View style={{ fontSize: 13,marginBottom:20 }}>
            <Text style={styles.text}>
              How did you hear about us :{" "}
              <Text style={styles.title}>
                {applicant_personal_details.how_hear_about_us}
              </Text>
            </Text>

            <Text style={styles.text}>
              Internet : {applicant_personal_details.how_hear_about_us_internet}
            </Text>
            <Text style={styles.text}>
              Magazine : {applicant_personal_details.how_hear_about_us_magazine}
            </Text>
            <Text style={styles.text}>
              Other : {applicant_personal_details.how_hear_about_us_other}
            </Text>
            <Text style={styles.text}>
              Primary Religious Affiliation :{" "}
              {applicant_personal_details.primary_rerigious_affiliation}
            </Text>
            <Text style={styles.text}>
              Other Primary Religious Affiliation:{" "}
              {applicant_personal_details.other_primary_rerigious_affiliation}
            </Text>
          </View>
        <View style={{ alignItems: "flex-start", marginBottom: 12 }}>
          <Text style={[styles.title]}>
            Ministerial cridentials :{" "}
            {applicant_personal_details.ministerial_organization ? "Yes" : "No"}
          </Text>
          {applicant_personal_details.ministerial_organization && (
            <View>
              <Text style={styles.text}>
                Organization:{" "}
                {applicant_personal_details.ministerial_organization}
              </Text>
              <Text style={styles.text}>
                District: {applicant_personal_details.ministerial_organization}
              </Text>
              <Text style={styles.text}>
                Cridential level:{" "}
                {applicant_personal_details.how_hear_about_us_magazine}
              </Text>
              <Text style={styles.text}>
                Other Primary Date obtained:{" "}
                {applicant_personal_details.how_hear_about_us_other}
              </Text>
              <Text style={styles.text}>
                Other Primary Country:{" "}
                {applicant_personal_details.how_hear_about_us_other}
              </Text>
            </View>
          )}
        </View>
        <Text style={[styles.title, { marginBottom: 5 }]}>
          {" "}
          APPLICATION DETAILS: References
        </Text>
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
        <Text style={[styles.title, { marginTop: 20 }]}>
          {" "}
          APPLICATION DETAILS: Academic Information
        </Text>
        <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableColl}>
            <Text style={styles.tableCell}>School Name </Text>
          </View>

          <View style={styles.tableColl}>
            <Text style={styles.tableCell}>City/state/country </Text>
          </View>
          <View style={styles.tableColl}>
            <Text style={styles.tableCell}>Dates attended </Text>
          </View>
          <View style={styles.tableColl}>
            <Text style={styles.tableCell}>Major </Text>
          </View>
          <View style={styles.tableColl}>
            <Text style={styles.tableCell}>Degrees </Text>
          </View>
        </View>
        {applicant_education_data.educatorsList?.map(
          ({ name, city, dates, major, Degrees }, key) => {
            return (
              <View style={styles.tableRow} key={name}>
                <View style={styles.tableColl}>
                  <Text style={styles.tableCell}>{name} </Text>
                </View>

                <View style={styles.tableColl}>
                  <Text style={styles.tableCell}>{city} </Text>
                </View>
                <View style={styles.tableColl}>
                  <Text style={styles.tableCell}>{dates} </Text>
                </View>
                <View style={styles.tableColl}>
                  <Text style={styles.tableCell}>
                    {major}
                  </Text>
                </View>
                <View style={styles.tableColl}>
                  <Text style={styles.tableCell}>
                    {Degrees}{" "}
                  </Text>
                </View>
              </View>
            );
          }
        )}
       </View>
        <View>
          <Text style={[styles.title, {marginTop:20}]}>
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
