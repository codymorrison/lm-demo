import styles from "./page.module.css";
import Header from "@/components/Header";
import Accordion from "@/components/Accordion";
import { format } from "date-fns";
import ButtonLink from "@/components/ButtonLink";

export default function Services() {
  // This would normally be a query or a call to an external API.
  // Since this is server-side components we'll just treat it as if the data is there.
  const appointments = [
    { id: 1, serviceName: "oil", date: new Date(1714921200 * 1000) },
    { id: 2, serviceName: "oil", date: new Date(1714928400 * 1000) },
    { id: 3, serviceName: "oil", date: new Date(1715029200 * 1000) },
    { id: 4, serviceName: "tires", date: new Date(1714921200 * 1000) },
    { id: 4, serviceName: "wash", date: new Date(1714921200 * 1000) },
  ];

  return (
    <div>
      <Header title="Select a Service" />

      <section className={styles.container}>
        <Accordion iconName="oil" title="Synthetic Oil Change">
          <legend style={{ marginBottom: 4 }}>Available Appointments</legend>
          <div className={styles.childContainer}>
            {appointments
              .filter((i) => i.serviceName === "oil")
              .map((appointment) => {
                return (
                  <div
                    key={appointment.id}
                    style={{
                      padding: "5px 0",
                    }}
                  >
                    <label className={styles.formText}>
                      <input type="radio" name="appointmentDate" />
                      {format(appointment.date, "EEEE, LLL Lo hh:mm b")}
                    </label>
                  </div>
                );
              })}

            <div className={styles.buttonContainer}>
              <ButtonLink href="#" title="Book Now" size="sm" />
            </div>
          </div>
        </Accordion>

        <Accordion iconName="tires" title="Tire Rotation & Inspection">
          <legend style={{ marginBottom: 4 }}>Available Appointments</legend>
          <div className={styles.childContainer}>
            {appointments
              .filter((i) => i.serviceName === "tires")
              .map((appointment) => {
                return (
                  <div
                    key={appointment.id}
                    style={{
                      padding: "5px 0",
                    }}
                  >
                    <label className={styles.formText}>
                      <input type="radio" name="appointmentDate" />
                      {format(appointment.date, "EEEE, LLL Lo hh:mm b")}
                    </label>
                  </div>
                );
              })}

            <div className={styles.buttonContainer}>
              <ButtonLink href="#" title="Book Now" size="sm" />
            </div>
          </div>
        </Accordion>

        <Accordion iconName="car-wash" title="Express Auto Detailing">
          <legend style={{ marginBottom: 4 }}>Available Appointments</legend>
          <div className={styles.childContainer}>
            {appointments
              .filter((i) => i.serviceName === "wash")
              .map((appointment) => {
                return (
                  <div
                    key={appointment.id}
                    style={{
                      padding: "5px 0",
                    }}
                  >
                    <label className={styles.formText}>
                      <input type="radio" name="appointmentDate" />
                      {format(appointment.date, "EEEE, LLL Lo hh:mm b")}
                    </label>
                  </div>
                );
              })}

            <div className={styles.buttonContainer}>
              <ButtonLink href="#" title="Book Now" size="sm" />
            </div>
          </div>
        </Accordion>
      </section>
    </div>
  );
}
