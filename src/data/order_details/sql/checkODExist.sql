SELECT CASE WHEN EXISTS (
    SELECT 1
    FROM [order_details]
    WHERE [user_id] = @user_id
      AND [order_id] IS NULL
      AND [product_id] = @product_id
      AND [product_size] = @product_size
) THEN 1 ELSE 0 END AS Result;
