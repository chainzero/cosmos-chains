package cli

import (
	"strconv"

	"apitracking/x/apitracking/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdApiRequest() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "api-request [requestor] [uri] [datetime]",
		Short: "Broadcast message api-request",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argRequestor := args[0]
			argUri := args[1]
			argDatetime := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgApiRequest(
				clientCtx.GetFromAddress().String(),
				argRequestor,
				argUri,
				argDatetime,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
