import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cart/cartSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.count);
  return (
    <Card>
      <div className="flex">
        <CardMedia
          component="img"
          alt="green iguana"
          height="240"
          image={item.image}
          style={{ objectFit: "cover", width: 100 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description.length > 100
              ? item.description.substring(0, 100) + "..."
              : item.description}
          </Typography>
        </CardContent>
      </div>
      <CardActions className="space-between">
          <div style={{ paddingLeft: 16 }}>
            <Typography variant="h6" color="text.primary">
              ${item.price*count}
            </Typography>
          </div>
        <div className="flex item-center space-between">
          <Button
            style={{ minWidth: 10, width: 10, marginRight: 8 }}
            variant="outlined"
            onClick={() => {
              count > 0 && setCount(count - 1);
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <p>{count}</p>
          <Button
            style={{ minWidth: 10, width: 10, marginLeft: 8 }}
            variant="outlined"
            onClick={() => setCount(count + 1)}
          >
            <AddIcon fontSize="small" />
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default CartItem;
