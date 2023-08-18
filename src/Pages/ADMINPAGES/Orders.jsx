import format from "date-fns/format";
import { HiDotsVertical } from "react-icons/hi";
import Badge from "../../components/adminComponents/Badge";
import Card from "../../components/adminComponents/Card";
import CardBody from "../../components/adminComponents/CardBody";
import IconButton from "../../components/adminComponents/IconButton";
import Page from "../../components/adminComponents/Page";
import PageBody from "../../components/adminComponents/PageBody";
import PageHeader from "../../components/adminComponents/PageHeader";
import Table from "../../components/adminComponents/Table";
import TableBody from "../../components/adminComponents/TableBody";
import TableCell from "../../components/adminComponents/TableCell";
import TableHead from "../../components/adminComponents/TableHead";
import TableRow from "../../components/adminComponents/TableRow";
import Typography from "../../components/adminComponents/Typography";




function OrderTable({ orders }) {
  if (!orders || !orders.length) {
    return null;
  }

  return (
    <Card className="md:col-span-12">
      <CardBody>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell head={true}>Date</TableCell>
              <TableCell head={true}>ID</TableCell>
              <TableCell head={true}>Status</TableCell>
              <TableCell head={true}>Amount</TableCell>
              <TableCell head={true}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  {format(new Date(order.createdAt), "yyyy-MM-dd")}
                </TableCell>
                <TableCell>{order.id}</TableCell>
                <TableCell>
                  <Badge>{order.status}</Badge>
                </TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>
                  <IconButton>
                    <HiDotsVertical />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
}

export default function Orders() {
  const { data } = useOrders();

  return (
    <Page>
      <PageHeader>
        <Typography variant="h1">Orders</Typography>
      </PageHeader>
      <PageBody>
        <OrderTable orders={data} />
      </PageBody>
    </Page>
  );
}
