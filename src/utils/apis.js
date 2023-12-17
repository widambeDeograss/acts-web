import { baseUrl } from "./BaseUrl"

export const UserUrls = {
    userLogin: baseUrl + "/auth/login",
    userContact: baseUrl +  "/manager/contact",
    userApplication: baseUrl +  "/manager/application",
    Events: baseUrl +  "/manager/event",
    SingleEvent: baseUrl + "/manager/single-event/",
    EventsActions: baseUrl +  "/manager/event-actions/",
    Application: baseUrl +  "/manager/application",
    Dashboard: baseUrl +  "/manager/dashboard",
    DeleteEvent: baseUrl +  "/manager/delete-contact/",
    changePassword: baseUrl + "/auth/change-password",
    courses: baseUrl + "/manager/course-get-create",
    courseDelete: baseUrl + "/manager/course-delete-update",
    staff: baseUrl + "/manager/stuff-get-create",
    staffDelete: baseUrl + "/manager/stuff-delete-update",
    administration: baseUrl + "/manager/admin-get-create",
    administrationDelete: baseUrl + "/manager/admin-delete-update",
    mastersFees: baseUrl + "/manager/masters-cost-get-create",
    mastersFeesDelete: baseUrl + "/manager/masters-cost-delete-update",
    phdFees: baseUrl + "/manager/phd-cost-get-create",
    phdFeesDelete: baseUrl + "/manager/phd-cost-delete-update",
    siteInfo : baseUrl + "/manager/important-information-get-create",
    siteInfoUpdate : baseUrl + "/manager/important-information-delete-update",
    gellery : baseUrl + "/manager/gallery-get-create",
    gelleryDelete : baseUrl + "/manager/gallery-delete-update",

}
