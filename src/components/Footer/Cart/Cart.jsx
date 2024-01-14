import { React, useEffect, useCallback } from "react";
import CartCards from "./CartCards.jsx";
import Loading from "../../Loading.jsx";
import { fetchPosts, deletePost } from "../../state/postSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const dispatch = useDispatch();
    const { records, loading, error } = useSelector((state) => state.cart);
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    const deleteItem = useCallback((e) => dispatch(deletePost(e)), [dispatch]);

    return (
        <Loading loading={loading} error={error}>
            <CartCards data={records} deleteItem={deleteItem} />
        </Loading>
    );
};

export default Cart;
