# Copyright (C) 2016 Openwrt.org
#
# This is free software, licensed under the Apache License, Version 2.0 .
#

include $(TOPDIR)/rules.mk

LUCI_TITLE:=LuCI support for sunpanel
LUCI_DEPENDS:=+sunpanel
LUCI_PKGARCH:=all

PKG_VERSION:=1.7.0-1
# PKG_RELEASE MUST be empty for luci.mk
PKG_RELEASE:=

LUCI_MINIFY_CSS:=0
LUCI_MINIFY_JS:=0

include $(TOPDIR)/feeds/luci/luci.mk

# call BuildPackage - OpenWrt buildroot signature

