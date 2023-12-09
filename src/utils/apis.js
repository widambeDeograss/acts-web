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
}
